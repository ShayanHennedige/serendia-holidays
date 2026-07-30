import { logAiInteraction } from '../../lib/log';

interface EnquiryRequestBody {
  name?: string;
  contact?: string;
  message?: string;
  itinerary?: unknown;
}

export async function POST(request: Request) {
  let body: EnquiryRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body.contact) {
    return Response.json({ error: 'Please provide a way to reach you (email or phone).' }, { status: 400 });
  }

  // No email/CRM provider is configured in this project, so the enquiry is
  // only logged here rather than actually dispatched anywhere. Swap this
  // for a real provider (e.g. Resend, SendGrid, a CRM webhook) when one is
  // available - callers should keep showing Serendia's direct contact
  // details until then, since nothing is actually sent yet.
  const reference = `SH-${Date.now().toString(36).toUpperCase()}`;
  const reviewRecord = logAiInteraction('quote-enquiry', { reference, ...body }, 'pending-review');

  return Response.json({ ok: true, reference, reviewId: reviewRecord.id, status: 'pending_staff_review' });
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
