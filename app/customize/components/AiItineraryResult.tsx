'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { AiItinerary, TourCustomer, TourDetails } from '../../lib/tour-types';
import { travelPaces } from './plannerOptions';

interface AiItineraryResultProps {
  itinerary: AiItinerary;
  tourDetails: TourDetails;
  onStartOver: () => void;
  onEditRequest?: () => void;
}

interface SubmissionConfirmation {
  reference: string;
}

const initialCustomer: TourCustomer = {
  fullName: '',
  country: '',
  email: '',
  phone: '',
  preferredContactMethod: 'WhatsApp',
};

export default function AiItineraryResult({ itinerary, tourDetails, onStartOver, onEditRequest }: AiItineraryResultProps) {
  const t = useTranslations('PlannerResult');
  const plannerT = useTranslations('Planner');
  const [customer, setCustomer] = useState<TourCustomer>(initialCustomer);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [confirmation, setConfirmation] = useState<SubmissionConfirmation | null>(null);
  const [emailNotice, setEmailNotice] = useState<string | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);
  const [pdfDownloading, setPdfDownloading] = useState(false);
  const [pdfDownloadError, setPdfDownloadError] = useState<string | null>(null);

  const downloadPdf = async () => {
    if (!confirmation || pdfDownloading) return;

    setPdfDownloading(true);
    setPdfDownloadError(null);
    try {
      const response = await fetch('/api/tour-submissions/pdf', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          reference: confirmation.reference,
          submission: { customer, tour: tourDetails, itinerary, consent },
        }),
      });

      if (!response.ok || !response.headers.get('content-type')?.includes('application/pdf')) {
        const data = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(data?.error || t('errors.pdf'));
      }

      const pdf = await response.blob();
      if (pdf.size === 0 || !pdf.type.includes('application/pdf')) {
        throw new Error(t('errors.pdfIncomplete'));
      }

      const url = URL.createObjectURL(pdf);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Personalised_Tour_Request_${confirmation.reference}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
    } catch (error) {
      setPdfDownloadError(error instanceof Error ? error.message : t('errors.pdf'));
    } finally {
      setPdfDownloading(false);
    }
  };

  const finaliseTour = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!customer.fullName.trim() || (!customer.email.trim() && !customer.phone.trim()) || !consent || sending) return;
    setSending(true);
    setSendError(null);

    try {
      const submission = { customer, tour: tourDetails, itinerary, consent };
      const response = await fetch('/api/tour-submissions', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(submission),
      });
      const data = await response.json();
      if (!response.ok) {
        setSendError(data.error || t('errors.finalise'));
        return;
      }
      setConfirmation({ reference: data.reference });
      const shouldEmail = window.confirm(t('confirmEmail', { email: 'dream@venomholidays.com' }));
      if (!shouldEmail) {
        setEmailNotice(t('notices.skipped'));
        return;
      }

      setEmailSending(true);
      try {
        const emailResponse = await fetch('/api/tour-submissions/email', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ reference: data.reference, submission }),
        });
        const emailData = await emailResponse.json();

        if (!emailResponse.ok) {
          setEmailNotice(emailData.error || t('notices.emailFailed'));
          return;
        }

        setEmailNotice(t('notices.emailed', { email: emailData.recipient || 'dream@venomholidays.com' }));
      } catch {
        setEmailNotice(t('notices.emailFailedNow'));
      } finally {
        setEmailSending(false);
      }
    } catch {
      setSendError(t('errors.finalise'));
    } finally {
      setSending(false);
    }
  };

  if (confirmation) {
    return (
      <div className="planner-card planner-result-card planner-thank-you">
        <div className="planner-success-mark" aria-hidden="true">✓</div>
        <span className="planner-result-kicker">{t('thanks.kicker')}</span>
        <h2>{t('thanks.title')}</h2>
        <p className="planner-result-lead">{t('thanks.lead')}</p>
        <div className="planner-reference-card">
          <span>{t('thanks.reference')}</span>
          <strong>{confirmation.reference}</strong>
        </div>
        {emailSending && <p className="planner-delivery-note">{t('notices.sending')}</p>}
        {emailNotice && <p className="planner-delivery-note">{emailNotice}</p>}
        {pdfDownloadError && <p className="planner-inline-error">{pdfDownloadError}</p>}
        <div className="planner-next-steps">
          <h3>{t('thanks.nextTitle')}</h3>
          <ul>
            {(t.raw('thanks.nextSteps') as string[]).map((step) => <li key={step}>{step}</li>)}
          </ul>
        </div>
        <div className="planner-confirmation-actions">
          <button type="button" className="planner-primary-button" onClick={downloadPdf} disabled={pdfDownloading}>
            {pdfDownloading ? t('thanks.preparing') : t('thanks.download')}
          </button>
          <button type="button" className="planner-secondary-button" onClick={onEditRequest || onStartOver}>{t('thanks.edit')}</button>
          <Link className="planner-text-link" href="/contact">{t('thanks.contact')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="planner-card planner-result-card">
      <div className="planner-result-status-row">
        <div className="planner-result-banner">{t('route.banner')}</div>
        <span className="planner-review-state"><i /> {t('route.ready')}</span>
      </div>

      <h2>{t('route.title')}</h2>
      <p className="planner-result-lead">{t('route.lead')}</p>

      <div className="planner-result-days">
        {tourDetails.selectedLocations.map((destination, index) => (
          <article key={`${destination}-${index}`} className="planner-result-day planner-selected-destination">
            <div><span>{t('route.stop', { number: index + 1 })}</span><strong>{destination}</strong></div>
          </article>
        ))}
      </div>

      <div className="planner-final-summary">
        <span>{t('route.destinations', { count: tourDetails.selectedLocations.length })}</span>
        <span>{t('route.experiences', { count: tourDetails.activities.length })}</span>
        <span>{t('route.travellers', { count: tourDetails.adults + tourDetails.children })}</span>
        <span>{t('route.pace', { pace: (plannerT.raw('options.paces') as string[])[travelPaces.indexOf(tourDetails.travelPace)] ?? tourDetails.travelPace })}</span>
      </div>

      <form className="planner-result-section planner-finalise-panel" onSubmit={finaliseTour}>
        <span className="planner-result-kicker">{t('final.kicker')}</span>
        <h3>{t('final.title')}</h3>
        <p>{t('final.copy', { email: 'dream@venomholidays.com' })}</p>

        <div className="planner-grid planner-grid-2 planner-final-contact-grid">
          <label className="planner-field-stack">{t('final.fullName')}
            <input className="planner-input" autoComplete="name" value={customer.fullName} onChange={(event) => setCustomer({ ...customer, fullName: event.target.value })} />
          </label>
          <label className="planner-field-stack">{t('final.country')}
            <input className="planner-input" autoComplete="country-name" value={customer.country} onChange={(event) => setCustomer({ ...customer, country: event.target.value })} />
          </label>
          <label className="planner-field-stack">{t('final.email')}
            <input type="email" className="planner-input" autoComplete="email" value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} />
          </label>
          <label className="planner-field-stack">{t('final.phone')}
            <input type="tel" className="planner-input" autoComplete="tel" value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} />
          </label>
          <label className="planner-field-stack">{t('final.method')}
            <select className="planner-input" value={customer.preferredContactMethod} onChange={(event) => setCustomer({ ...customer, preferredContactMethod: event.target.value as TourCustomer['preferredContactMethod'] })}>
              <option value="WhatsApp">WhatsApp</option><option value="Email">{t('final.methodEmail')}</option><option value="Phone">{t('final.methodPhone')}</option>
            </select>
          </label>
        </div>

        <label className={`planner-radio-row planner-consent-row ${consent ? 'checked' : ''}`}>
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          <span className="planner-radio-mark" aria-hidden="true" />
          <span>{t('final.consent')}</span>
        </label>

        {sendError && <div className="planner-inline-error">{sendError} {t('final.callUs')}</div>}
        <div className="planner-actions">
          <button type="button" className="planner-secondary-button" onClick={onEditRequest || onStartOver}>{t('final.editPreferences')}</button>
          <button type="submit" className="planner-primary-button" disabled={sending || emailSending || !customer.fullName.trim() || (!customer.email.trim() && !customer.phone.trim()) || !consent}>
            {sending ? t('final.creating') : emailSending ? t('final.sendingEmail') : t('final.submit')}
          </button>
        </div>
        <small className="planner-security-note">{t('final.security')}</small>
      </form>
    </div>
  );
}
