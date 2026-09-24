'use client';

import { useLanguage } from './LanguageProvider';

const labels = {
  en: 'Chat with Serendia Holidays on WhatsApp',
  fr: 'Discuter avec Serendia Holidays sur WhatsApp',
  de: 'Mit Serendia Holidays auf WhatsApp chatten',
  it: 'Chatta con Serendia Holidays su WhatsApp',
  es: 'Chatea con Serendia Holidays por WhatsApp',
  lt: 'Susirašykite su Serendia Holidays per WhatsApp',
} as const;

export default function WhatsAppSupport({ phoneNumber }: { phoneNumber: string }) {
  const { locale } = useLanguage();
  const normalizedNumber = phoneNumber.replace(/\D/g, '');
  const href = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent('Hello Serendia Holidays, I would like some help planning my trip.')}`;

  return (
    <a
      className="whatsapp-support"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={labels[locale]}
      title={labels[locale]}
      data-auto-translate-skip
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2a12.65 12.65 0 0 0-10.9 19.05L3.5 28.8l6.75-1.55A12.75 12.75 0 1 0 16 3.2Zm0 22.9a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-4 .92.98-3.9-.25-.4A10.22 10.22 0 1 1 16 26.1Zm5.6-7.62c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.4 8.4 0 0 1-2.47-1.52 9.28 9.28 0 0 1-1.72-2.14c-.18-.3 0-.46.13-.6.13-.12.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.5 1.07 2.92 1.22 3.12c.15.2 2.1 3.2 5.08 4.5.7.3 1.25.48 1.68.61.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" fill="currentColor" />
      </svg>
    </a>
  );
}
