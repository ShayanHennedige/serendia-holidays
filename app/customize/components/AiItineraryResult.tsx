'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import type { AiItinerary, TourCustomer, TourDetails } from '../../lib/tour-types';

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
  const [customer, setCustomer] = useState<TourCustomer>(initialCustomer);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [confirmation, setConfirmation] = useState<SubmissionConfirmation | null>(null);
  const [emailNotice, setEmailNotice] = useState<string | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);

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
        setSendError(data.error || 'Could not finalise your tour request right now.');
        return;
      }
      setConfirmation({ reference: data.reference });
      const shouldEmail = window.confirm(`The PDF has been created. Send it to dream@venomholidays.com now?`);
      if (!shouldEmail) {
        setEmailNotice('PDF created successfully. Email sending was skipped.');
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
          setEmailNotice(emailData.error || 'The PDF was created, but the email could not be sent.');
          return;
        }

        setEmailNotice(`PDF emailed to ${emailData.recipient || 'dream@venomholidays.com'}.`);
      } catch {
        setEmailNotice('The PDF was created, but the email could not be sent right now.');
      } finally {
        setEmailSending(false);
      }
    } catch {
      setSendError('Could not finalise your tour request right now.');
    } finally {
      setSending(false);
    }
  };

  if (confirmation) {
    return (
      <div className="planner-card planner-result-card planner-thank-you">
        <div className="planner-success-mark" aria-hidden="true">✓</div>
        <span className="planner-result-kicker">Tour request submitted</span>
        <h2>Thank You!</h2>
        <p className="planner-result-lead">Your personalised tour request has been submitted successfully.</p>
        <div className="planner-reference-card">
          <span>Reference number</span>
          <strong>{confirmation.reference}</strong>
        </div>
        {emailSending && <p className="planner-delivery-note">Sending the PDF by email now...</p>}
        {emailNotice && <p className="planner-delivery-note">{emailNotice}</p>}
        <div className="planner-next-steps">
          <h3>Our travel consultants will now:</h3>
          <ul>
            <li>Review your itinerary</li>
            <li>Check hotel availability</li>
            <li>Prepare your quotation</li>
            <li>Contact you shortly</li>
          </ul>
        </div>
        <div className="planner-confirmation-actions">
          <button type="button" className="planner-secondary-button" onClick={onEditRequest || onStartOver}>Edit Request</button>
          <Link className="planner-text-link" href="/contact">Contact Us →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="planner-card planner-result-card">
      <div className="planner-result-status-row">
        <div className="planner-result-banner">Selected destinations</div>
        <span className="planner-review-state"><i /> Ready for your review</span>
      </div>

      <h2>Your selected route</h2>
      <p className="planner-result-lead">Review the destinations you pinned, then add your contact details and finalise the request for the Serendia operations team.</p>

      <div className="planner-result-days">
        {tourDetails.selectedLocations.map((destination, index) => (
          <article key={`${destination}-${index}`} className="planner-result-day planner-selected-destination">
            <div><span>Stop {index + 1}</span><strong>{destination}</strong></div>
          </article>
        ))}
      </div>

      <div className="planner-final-summary">
        <span>{tourDetails.selectedLocations.length} destinations</span>
        <span>{tourDetails.activities.length} experiences</span>
        <span>{tourDetails.adults + tourDetails.children} travellers</span>
        <span>{tourDetails.travelPace} pace</span>
      </div>

      <form className="planner-result-section planner-finalise-panel" onSubmit={finaliseTour}>
        <span className="planner-result-kicker">Final submission</span>
        <h3>Finalise My Tour</h3>
        <p>We will create a professional PDF first, then ask whether you want it emailed to dream@venomholidays.com.</p>

        <div className="planner-grid planner-grid-2 planner-final-contact-grid">
          <label className="planner-field-stack">Full name *
            <input className="planner-input" autoComplete="name" value={customer.fullName} onChange={(event) => setCustomer({ ...customer, fullName: event.target.value })} />
          </label>
          <label className="planner-field-stack">Country
            <input className="planner-input" autoComplete="country-name" value={customer.country} onChange={(event) => setCustomer({ ...customer, country: event.target.value })} />
          </label>
          <label className="planner-field-stack">Email address
            <input type="email" className="planner-input" autoComplete="email" value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} />
          </label>
          <label className="planner-field-stack">Contact number
            <input type="tel" className="planner-input" autoComplete="tel" value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} />
          </label>
          <label className="planner-field-stack">Preferred contact method
            <select className="planner-input" value={customer.preferredContactMethod} onChange={(event) => setCustomer({ ...customer, preferredContactMethod: event.target.value as TourCustomer['preferredContactMethod'] })}>
              <option>WhatsApp</option><option>Email</option><option>Phone</option>
            </select>
          </label>
        </div>

        <label className={`planner-radio-row planner-consent-row ${consent ? 'checked' : ''}`}>
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          <span className="planner-radio-mark" aria-hidden="true" />
          <span>I confirm these details are accurate and consent to Serendia Holidays processing this request for itinerary review and quotation.</span>
        </label>

        {sendError && <div className="planner-inline-error">{sendError} You can also WhatsApp/Call +94 77 398 6504.</div>}
        <div className="planner-actions">
          <button type="button" className="planner-secondary-button" onClick={onEditRequest || onStartOver}>← Edit preferences</button>
          <button type="submit" className="planner-primary-button" disabled={sending || emailSending || !customer.fullName.trim() || (!customer.email.trim() && !customer.phone.trim()) || !consent}>
            {sending ? 'Creating PDF…' : emailSending ? 'Sending email…' : 'Finalise My Tour →'}
          </button>
        </div>
        <small className="planner-security-note">Generated in memory · PDF not stored on the server · Email prompt appears after creation</small>
      </form>
    </div>
  );
}
