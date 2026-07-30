import { logAiInteraction } from '../../../lib/log';
import { generateTourPdf } from '../../../lib/tour-pdf';
import {
  createRouteMapSvg,
  createStaticRouteMap,
  loadTourSnapshot,
  recordTourDelivery,
  validateFinalTourRequest,
} from '../../../lib/tour-submissions';
import type { TourSubmissionSnapshot } from '../../../lib/tour-types';
import { getTourSubmissionEmailRecipient, sendTourSubmissionEmail } from '../../../lib/tour-email';

interface EmailTourSubmissionRequest {
  reference?: string;
  submission?: unknown;
}

export async function POST(request: Request) {
  let body: EmailTourSubmissionRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const reference = body.reference?.trim();
  if (!reference) {
    return Response.json({ error: 'Missing submission reference.' }, { status: 400 });
  }
  if (!/^TRIP-SL-\d{6}-[A-F0-9]{4}$/.test(reference)) {
    return Response.json({ error: 'Invalid submission reference.' }, { status: 400 });
  }

  let snapshot = await loadTourSnapshot(reference);
  if (!snapshot && body.submission) {
    const validation = validateFinalTourRequest(body.submission);
    if (validation.ok === false) {
      return Response.json({ error: validation.error }, { status: 400 });
    }
    snapshot = {
      ...validation.data,
      reference,
      generatedAt: new Date().toISOString(),
      status: 'Submitted',
      schemaVersion: 1,
    } satisfies TourSubmissionSnapshot;
  }
  if (!snapshot) {
    return Response.json({ error: 'Saved submission not found.' }, { status: 404 });
  }

  const filename = `Personalised_Tour_Request_${reference}.pdf`;
  try {
    const routeMapSvg = createRouteMapSvg(snapshot.tour.selectedDestinationPins, snapshot.tour.activities);
    const routeMapPng = await createStaticRouteMap(snapshot.tour.selectedDestinationPins);
    const routeMapDataUri = routeMapPng ? `data:image/png;base64,${routeMapPng.toString('base64')}` : undefined;
    const pdf = await generateTourPdf(snapshot, routeMapSvg, routeMapDataUri);

    await sendTourSubmissionEmail({
      snapshot,
      pdf,
      filename,
    });

    await recordTourDelivery({
      reference,
      at: new Date().toISOString(),
      channel: 'email',
      status: 'sent',
      recipient: getTourSubmissionEmailRecipient(),
    });

    logAiInteraction('tour-submission-email-sent', { reference, recipient: getTourSubmissionEmailRecipient(), pdf: filename }, 'submitted');

    return Response.json({ ok: true, reference, recipient: getTourSubmissionEmailRecipient() });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Email delivery failed.';
    await recordTourDelivery({
      reference,
      at: new Date().toISOString(),
      channel: 'email',
      status: 'failed',
      recipient: getTourSubmissionEmailRecipient(),
      error: message,
    });
    logAiInteraction('tour-submission-email-failed', { reference, error: message }, 'pending-review');
    console.error('Could not email tour submission PDF.', error);
    return Response.json({ error: message }, { status: 502 });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;
