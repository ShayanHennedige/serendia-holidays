import { generateTourPdf } from '../../../lib/tour-pdf';
import { createRouteMapSvg, createStaticRouteMap, validateFinalTourRequest } from '../../../lib/tour-submissions';
import type { TourSubmissionSnapshot } from '../../../lib/tour-types';

interface PdfRequest {
  reference?: string;
  submission?: unknown;
}

export async function POST(request: Request) {
  let body: PdfRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const reference = body.reference?.trim();
  if (!reference || !/^TRIP-SL-\d{6}-[A-F0-9]{4}$/.test(reference)) {
    return Response.json({ error: 'Invalid submission reference.' }, { status: 400 });
  }

  const validation = validateFinalTourRequest(body.submission);
  if (validation.ok === false) return Response.json({ error: validation.error }, { status: 400 });

  const snapshot: TourSubmissionSnapshot = {
    ...validation.data,
    reference,
    generatedAt: new Date().toISOString(),
    status: 'Submitted',
    schemaVersion: 1,
  };

  try {
    const routeMapSvg = createRouteMapSvg(snapshot.tour.selectedDestinationPins, snapshot.tour.activities);
    const routeMapPng = await createStaticRouteMap(snapshot.tour.selectedDestinationPins);
    const routeMapDataUri = routeMapPng ? `data:image/png;base64,${routeMapPng.toString('base64')}` : undefined;
    const pdf = await generateTourPdf(snapshot, routeMapSvg, routeMapDataUri);
    const filename = `Personalised_Tour_Request_${reference}.pdf`;
    const body = new Uint8Array(pdf.byteLength);
    body.set(pdf);

    return new Response(body.buffer, {
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': `attachment; filename="${filename}"`,
        'content-length': String(pdf.byteLength),
        'cache-control': 'no-store',
        'x-content-type-options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Could not create tour submission PDF download.', error);
    return Response.json({ error: 'We could not create your PDF right now. Please try again shortly.' }, { status: 502 });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;
