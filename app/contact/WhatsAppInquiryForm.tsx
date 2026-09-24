'use client';

import { FormEvent, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '94773986504';

type Inquiry = {
  fullName: string;
  whatsapp: string;
  email: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  travellers: string;
  message: string;
};

const initialInquiry: Inquiry = {
  fullName: '',
  whatsapp: '',
  email: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  travellers: '2',
  message: '',
};

export default function WhatsAppInquiryForm() {
  const [inquiry, setInquiry] = useState(initialInquiry);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof Inquiry, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
  };

  const validateDates = () => {
    setError('');
    setSuccess('');

    if (inquiry.departureDate && inquiry.arrivalDate && inquiry.departureDate < inquiry.arrivalDate) {
      setError('Your departure date must be after your arrival date.');
      return false;
    }
    return true;
  };

  const messageLines = () => [
    'Hello Serendia Holidays, I would like to make an inquiry.',
    '',
    `Name: ${inquiry.fullName.trim()}`,
    `WhatsApp: ${inquiry.whatsapp.trim()}`,
    inquiry.email.trim() ? `Email: ${inquiry.email.trim()}` : '',
    inquiry.country.trim() ? `Country: ${inquiry.country.trim()}` : '',
    inquiry.arrivalDate ? `Arrival: ${inquiry.arrivalDate}` : '',
    inquiry.departureDate ? `Departure: ${inquiry.departureDate}` : '',
    inquiry.travellers ? `Travellers: ${inquiry.travellers}` : '',
    inquiry.message.trim() ? `Request: ${inquiry.message.trim()}` : '',
  ].filter(Boolean);

  const refreshContactPage = () => {
    window.setTimeout(() => window.location.reload(), 1500);
  };

  const openWhatsApp = () => {
    if (!formRef.current?.reportValidity() || !validateDates()) return;

    const popup = window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines().join('\n'))}`, '_blank', 'noopener,noreferrer');
    if (!popup) {
      setError('WhatsApp could not open. Please allow pop-ups and try again.');
      return;
    }
    setSuccess('WhatsApp has opened with your inquiry details. This page will refresh shortly.');
    refreshContactPage();
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current?.reportValidity() || !validateDates()) return;

    setSendingEmail(true);
    try {
      const response = await fetch('/api/contact-inquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inquiry),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || 'We could not send your email inquiry.');
      setSuccess('Your inquiry has been emailed to our travel team. This page will refresh shortly.');
      refreshContactPage();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'We could not send your email inquiry. Please try WhatsApp instead.');
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <section className="contact-form-panel contact-panel" aria-labelledby="whatsapp-inquiry-title">
      <div className="contact-panel-header">
        <h3 id="whatsapp-inquiry-title" className="contact-form-title">Start on WhatsApp</h3>
        <p className="contact-form-intro">Share a few trip details and we will receive them directly in WhatsApp.</p>
      </div>

      <form ref={formRef} className="contact-form contact-whatsapp-form" onSubmit={sendEmail}>
        <label className="form-group">
          <span>Full name *</span>
          <input className="form-control" value={inquiry.fullName} onChange={(event) => update('fullName', event.target.value)} autoComplete="name" maxLength={100} required />
        </label>
        <label className="form-group">
          <span>WhatsApp number *</span>
          <input className="form-control" type="tel" value={inquiry.whatsapp} onChange={(event) => update('whatsapp', event.target.value)} autoComplete="tel" maxLength={30} required />
        </label>
        <label className="form-group">
          <span>Email address</span>
          <input className="form-control" type="email" value={inquiry.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" maxLength={160} />
        </label>
        <label className="form-group">
          <span>Country</span>
          <input className="form-control" value={inquiry.country} onChange={(event) => update('country', event.target.value)} autoComplete="country-name" maxLength={80} />
        </label>
        <label className="form-group">
          <span>Arrival date</span>
          <input className="form-control" type="date" value={inquiry.arrivalDate} onChange={(event) => update('arrivalDate', event.target.value)} />
        </label>
        <label className="form-group">
          <span>Departure date</span>
          <input className="form-control" type="date" value={inquiry.departureDate} min={inquiry.arrivalDate || undefined} onChange={(event) => update('departureDate', event.target.value)} />
        </label>
        <label className="form-group">
          <span>Number of travellers</span>
          <input className="form-control" type="number" min="1" max="50" value={inquiry.travellers} onChange={(event) => update('travellers', event.target.value)} />
        </label>
        <label className="form-group full">
          <span>How can we help?</span>
          <textarea className="form-control" value={inquiry.message} onChange={(event) => update('message', event.target.value)} maxLength={1500} placeholder="Tell us where you would like to go, your interests, or any special requests." />
        </label>
        {error && <p className="contact-form-error" role="alert">{error}</p>}
        {success && <p className="contact-form-success" role="status">{success}</p>}
        <div className="form-group full contact-whatsapp-submit">
          <div className="contact-inquiry-actions">
            <button className="contact-whatsapp-button" type="button" onClick={openWhatsApp}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.7 11.7 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3Zm-8.4 18.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.5 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.7-4.2-3.8-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.6-1-2.2-.3-.6-.6-.5-.8-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" fill="currentColor" /></svg>
            Send inquiry on WhatsApp
            </button>
            <button className="contact-email-button" type="submit" disabled={sendingEmail}>{sendingEmail ? 'Sending email…' : 'Send inquiry by email'}</button>
          </div>
          <p className="contact-whatsapp-note">Choose WhatsApp for an instant chat or email to send the details to our travel team.</p>
        </div>
      </form>
    </section>
  );
}
