import 'server-only';

import nodemailer from 'nodemailer';
import type { TourSubmissionSnapshot } from './tour-types';

const defaultRecipient = 'dream@venomholidays.com';

export function getTourSubmissionEmailRecipient() {
  return process.env.TOUR_SUBMISSION_EMAIL_TO || defaultRecipient;
}

export async function sendTourSubmissionEmail(options: {
  snapshot: TourSubmissionSnapshot;
  pdf: Uint8Array;
  filename: string;
}) {
  const transport = createTransport();
  const recipient = getTourSubmissionEmailRecipient();
  const from = process.env.EMAIL_FROM_ADDRESS;

  if (!from) {
    throw new Error('Email delivery is not configured. Set EMAIL_FROM_ADDRESS.');
  }

  await transport.sendMail({
    from,
    to: recipient,
    subject: `New tour request ${options.snapshot.reference}`,
    text: buildEmailBody(options.snapshot, recipient),
    attachments: [
      {
        filename: options.filename,
        content: Buffer.from(options.pdf),
        contentType: 'application/pdf',
      },
    ],
  });
}

function createTransport() {
  const host = process.env.EMAIL_SMTP_HOST;
  const port = Number(process.env.EMAIL_SMTP_PORT || '465');
  const user = process.env.EMAIL_SMTP_USER;
  const pass = process.env.EMAIL_SMTP_PASS;

  if (!host || !Number.isFinite(port) || !user || !pass) {
    throw new Error('Email delivery is not configured. Set EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_USER and EMAIL_SMTP_PASS.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function buildEmailBody(snapshot: TourSubmissionSnapshot, recipient: string) {
  const { customer, tour, reference } = snapshot;
  return [
    'New tour request PDF generated from the Serendia Holidays website.',
    '',
    `Recipient: ${recipient}`,
    `Reference: ${reference}`,
    `Customer: ${customer.fullName}`,
    `Country: ${customer.country || 'Not provided'}`,
    `Travel dates: ${tour.arrivalDate} – ${tour.departureDate}`,
    `Travellers: ${tour.adults} adult(s), ${tour.children} child(ren)`,
    '',
    'The PDF is attached to this email.',
  ].join('\n');
}