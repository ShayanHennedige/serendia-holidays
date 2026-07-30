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
    return Response.json({ error: 'We could not deliver your final tour request. Your details have not been shown as successfully submitted. Please try again or contact us directly.' }, { status: 502 });
  } finally {
    // Best-effort zeroisation: the generated PDF is never written to disk and
    // its backing bytes are cleared as soon as the Meta request completes.
    pdf?.fill(0);
    pdf = undefined;
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;
