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
  const portValue = process.env.EMAIL_SMTP_PORT;
  const port = Number(portValue || '465');
  const user = process.env.EMAIL_SMTP_USER;
  const pass = process.env.EMAIL_SMTP_PASS;
  const missingVariables = [
    !host && 'EMAIL_SMTP_HOST',
    !portValue && 'EMAIL_SMTP_PORT',
    !user && 'EMAIL_SMTP_USER',
    !pass && 'EMAIL_SMTP_PASS',
  ].filter((name): name is string => Boolean(name));

  if (missingVariables.length || !Number.isFinite(port)) {
    const detail = missingVariables.length
      ? ` Missing Vercel variables: ${missingVariables.join(', ')}.`
      : ' EMAIL_SMTP_PORT must be a valid number.';
    throw new Error(`Email delivery is not configured.${detail}`);
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
