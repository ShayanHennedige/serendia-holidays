import { logAiInteraction } from '../../lib/log';
import { generateTourPdf } from '../../lib/tour-pdf';
import {
  createRouteMapSvg,
  createStaticRouteMap,
  createTourReference,
  saveTourSnapshot,
  validateFinalTourRequest,
} from '../../lib/tour-submissions';
import type { TourSubmissionSnapshot } from '../../lib/tour-types';

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validation = validateFinalTourRequest(input);
  if (validation.ok === false) return Response.json({ error: validation.error }, { status: 400 });

  const reference = createTourReference();
  const generatedAt = new Date().toISOString();
  const snapshot: TourSubmissionSnapshot = {
    ...validation.data,
    reference,
    generatedAt,
    status: 'Submitted',
    schemaVersion: 1,
  };
  const routeMapSvg = createRouteMapSvg(snapshot.tour.selectedDestinationPins, snapshot.tour.activities);
  const filename = `Personalised_Tour_Request_${reference}.pdf`;
  let pdf: Uint8Array | undefined;

  try {
    const routeMapPng = await createStaticRouteMap(snapshot.tour.selectedDestinationPins);
    await saveTourSnapshot(snapshot, routeMapSvg, routeMapPng);
    const routeMapDataUri = routeMapPng ? `data:image/png;base64,${routeMapPng.toString('base64')}` : undefined;
    pdf = await generateTourPdf(snapshot, routeMapSvg, routeMapDataUri);

    const reviewRecord = logAiInteraction('tour-submission', {
      reference,
      status: 'Submitted',
      customer: snapshot.customer,
      travelDates: { arrival: snapshot.tour.arrivalDate, departure: snapshot.tour.departureDate },
      travellers: { adults: snapshot.tour.adults, children: snapshot.tour.children },
      destinations: snapshot.tour.selectedLocations,
      preferences: {
        travelStyle: snapshot.tour.travelStyle,
        travelPace: snapshot.tour.travelPace,
        accommodation: snapshot.tour.hotelType,
        transport: snapshot.tour.transportPreference,
      },
      specialRequests: snapshot.tour.specialRequests,
      routeMap: `${reference}-route.${routeMapPng ? 'png' : 'svg'}`,
      pdf: filename,
      deliveryStatus: 'pdf-generated',
    }, 'submitted');

    return Response.json({
      ok: true,
      reference,
      status: 'Submitted',
      pdfCreated: true,
      reviewId: reviewRecord.id,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Tour submission failed.';
    logAiInteraction('tour-submission-failed', { reference, error: message }, 'pending-review');
    console.error('Could not finalise tour submission.', error);
    return Response.json({
      error: 'We could not deliver your final tour request. Your details have not been shown as successfully submitted. Please try again or contact us directly.',
      code: classifySubmissionError(error),
      diagnostic: sanitiseSubmissionError(error),
    }, { status: 502 });
  } finally {
    // Best-effort zeroisation: the generated PDF is never written to disk and
    // its backing bytes are cleared as soon as the Meta request completes.
    pdf?.fill(0);
    pdf = undefined;
  }
}

function sanitiseSubmissionError(error: unknown) {
  const firstLine = error instanceof Error ? error.message.split('\n', 1)[0] : 'Unknown PDF generation error';
  return firstLine
    .replace(/https?:\/\/\S+/gi, '[url]')
    .replace(/(?:\/[\w.@%+,-]+){2,}/g, '[path]')
    .replace(/[A-Za-z0-9_-]{32,}/g, '[redacted]')
    .slice(0, 240);
}

function classifySubmissionError(error: unknown) {
  const message = error instanceof Error ? error.message.toLowerCase() : '';
  if (message.includes('unexpected status code')) return 'CHROMIUM_PACK_HTTP_ERROR';
  if (message.includes('request timeout')) return 'CHROMIUM_PACK_TIMEOUT';
  if (message.includes('input directory')) return 'CHROMIUM_PACK_MISSING';
  if (message.includes('cannot open shared object') || message.includes('shared libraries')) return 'CHROMIUM_LIBRARY_MISSING';
  if (message.includes('failed to launch')) return 'CHROMIUM_LAUNCH_FAILED';
  if (message.includes('spawn')) return 'CHROMIUM_SPAWN_FAILED';
  if (message.includes('protocol error')) return 'CHROMIUM_PROTOCOL_ERROR';
  if (message.includes('chrom') || message.includes('browser') || message.includes('executable')) return 'PDF_BROWSER_UNAVAILABLE';
  if (message.includes('pdf asset') || message.includes('enoent')) return 'PDF_ASSET_UNAVAILABLE';
  if (message.includes('permission') || message.includes('erofs') || message.includes('eacces')) return 'SUBMISSION_STORAGE_UNAVAILABLE';
  return 'PDF_GENERATION_FAILED';
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;
