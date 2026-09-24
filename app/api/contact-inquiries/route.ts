import nodemailer from 'nodemailer';

type ContactInquiry = {
  fullName?: unknown;
  whatsapp?: unknown;
  email?: unknown;
  country?: unknown;
  arrivalDate?: unknown;
  departureDate?: unknown;
  travellers?: unknown;
  message?: unknown;
};

const recipient = process.env.CONTACT_INQUIRY_EMAIL_TO || 'dharshan@venomholidays.com';

function stringField(value: unknown, limit: number) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function POST(request: Request) {
  let body: ContactInquiry;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid inquiry details.' }, { status: 400 });
  }

  const inquiry = {
    fullName: stringField(body.fullName, 100),
    whatsapp: stringField(body.whatsapp, 30),
    email: stringField(body.email, 160),
    country: stringField(body.country, 80),
    arrivalDate: stringField(body.arrivalDate, 10),
    departureDate: stringField(body.departureDate, 10),
    travellers: stringField(body.travellers, 2),
    message: stringField(body.message, 1500),
  };

  if (!inquiry.fullName || !inquiry.whatsapp) {
    return Response.json({ error: 'Please provide your full name and WhatsApp number.' }, { status: 400 });
  }
  if (inquiry.email && !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (inquiry.departureDate && inquiry.arrivalDate && inquiry.departureDate < inquiry.arrivalDate) {
    return Response.json({ error: 'Departure must be after arrival.' }, { status: 400 });
  }

  const host = process.env.EMAIL_SMTP_HOST;
  const port = Number(process.env.EMAIL_SMTP_PORT || '465');
  const user = process.env.EMAIL_SMTP_USER;
  const pass = process.env.EMAIL_SMTP_PASS;
  const from = process.env.EMAIL_FROM_ADDRESS;
  if (!host || !user || !pass || !from || !Number.isFinite(port)) {
    return Response.json({ error: 'Email delivery is temporarily unavailable. Please use WhatsApp or call us.' }, { status: 503 });
  }

  try {
    const transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transport.sendMail({
      from,
      to: recipient,
      replyTo: inquiry.email || undefined,
      subject: `Website inquiry from ${inquiry.fullName}`,
      text: [
        'New Serendia Holidays website inquiry',
        '',
        `Name: ${inquiry.fullName}`,
        `WhatsApp: ${inquiry.whatsapp}`,
        `Email: ${inquiry.email || 'Not provided'}`,
        `Country: ${inquiry.country || 'Not provided'}`,
        `Travel dates: ${inquiry.arrivalDate || 'Not provided'} to ${inquiry.departureDate || 'Not provided'}`,
        `Travellers: ${inquiry.travellers || 'Not provided'}`,
        '',
        `Request: ${inquiry.message || 'Not provided'}`,
      ].join('\n'),
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Could not send contact inquiry email.', error);
    return Response.json({ error: 'We could not send your email inquiry. Please try WhatsApp instead.' }, { status: 502 });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
