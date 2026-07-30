'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';

interface ReviewRecord {
  id: string;
  at: string;
  kind: string;
  status: 'logged' | 'pending-review' | 'submitted';
  payload: unknown;
}

interface TourSubmissionPayload {
  reference?: string;
  status?: string;
  customer?: { fullName?: string; country?: string; email?: string; phone?: string };
  travelDates?: { arrival?: string; departure?: string };
  travellers?: { adults?: number; children?: number };
  destinations?: string[];
  preferences?: { travelStyle?: string; travelPace?: string; accommodation?: string; transport?: string };
  specialRequests?: string;
  deliveryStatus?: string;
}

interface ContentDraft {
  title: string;
  excerpt: string;
  body: string;
  metaDescription: string;
  language: string;
  tone: string;
  status: 'draft';
  meta?: { interactionId?: string };
}

export default function AIStaffStudio() {
  const [records, setRecords] = useState<ReviewRecord[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending-review'>('all');
  const [loading, setLoading] = useState(true);
  const [staffToken, setStaffToken] = useState('');
  const [authRequired, setAuthRequired] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [draft, setDraft] = useState<ContentDraft | null>(null);
  const [form, setForm] = useState({ title: 'Wild Sri Lanka, Softly Paced', notes: 'a boutique wildlife and south-coast journey for couples', tone: 'Warm & editorial', language: 'English' });

  const loadRecords = async (token = staffToken) => {
    const response = await fetch('/api/ai/review-log', { cache: 'no-store', headers: token ? { 'x-staff-token': token } : undefined });
    if (response.status === 401) {
      setAuthRequired(true);
      setLoading(false);
      return;
    }
    const data = await response.json();
    setRecords(data.records || []);
    setAuthRequired(false);
    if (token) sessionStorage.setItem('serendia-staff-token', token);
    setLoading(false);
  };

  useEffect(() => {
    let active = true;
    const savedToken = sessionStorage.getItem('serendia-staff-token') || '';
    fetch('/api/ai/review-log', { cache: 'no-store', headers: savedToken ? { 'x-staff-token': savedToken } : undefined })
      .then((response) => response.json())
      .then((data) => {
        if (active) {
          if (data.error === 'Staff authentication required.') setAuthRequired(true);
          else setRecords(data.records || []);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, []);

  const generate = async (event: FormEvent) => {
    event.preventDefault();
    setGenerating(true);
    const response = await fetch('/api/ai/content', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (response.ok) setDraft(data);
    setGenerating(false);
    void loadRecords();
  };

  const visibleRecords = filter === 'all' ? records : records.filter((record) => record.status === filter);

  return (
    <div className="staff-studio-shell">
      <aside className="staff-sidebar">
        <Link href="/" className="staff-brand"><i>SH</i><span>Serendia<br /><small>Intelligence studio</small></span></Link>
        <nav>
          <a className="active" href="#review"><span>◫</span> Review queue</a>
          <a href="#content"><span>✦</span> Content copilot</a>
          <a href="#quality"><span>◎</span> Quality signals</a>
        </nav>
        <div className="staff-prototype-note"><strong>Prototype workspace</strong><span>Add staff authentication and role controls before deployment.</span></div>
      </aside>

      <section className="staff-main">
        <header className="staff-topbar"><div><span>Staff workspace</span><strong>AI oversight</strong></div><Link href="/">View website ↗</Link></header>
        <div className="staff-content">
          <div className="staff-title-row">
            <div><p>Human-in-the-loop operations</p><h1>Review. Refine. <em>Release.</em></h1></div>
            <button type="button" onClick={() => void loadRecords()}>↻ Refresh queue</button>
          </div>

          <div className="staff-metrics" id="quality">
            <article><span>Pending review</span><strong>{records.filter((record) => record.status === 'pending-review').length}</strong><small>Requires a person</small></article>
            <article><span>Interactions logged</span><strong>{records.length}</strong><small>Current local demo</small></article>
            <article><span>Safety policy</span><strong>100%</strong><small>No auto-confirmations</small></article>
          </div>

          <section className="staff-panel" id="review">
            <div className="staff-panel-heading"><div><p>Quality review trail</p><h2>AI activity</h2></div><div className="staff-filters"><button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button><button className={filter === 'pending-review' ? 'active' : ''} onClick={() => setFilter('pending-review')}>Needs review</button></div></div>
            {authRequired && (
              <form className="staff-auth-panel" onSubmit={(event) => { event.preventDefault(); setLoading(true); void loadRecords(staffToken); }}>
                <strong>Staff access required</strong><span>Enter the private dashboard token configured on the server.</span>
                <div><input type="password" value={staffToken} onChange={(event) => setStaffToken(event.target.value)} placeholder="Staff access token" /><button type="submit">Unlock</button></div>
              </form>
            )}
            <div className="staff-record-list">
              {loading && <p className="staff-empty">Loading the review trail…</p>}
              {!loading && visibleRecords.length === 0 && <p className="staff-empty">No interactions yet. Try the planner, search or concierge, then refresh.</p>}
              {visibleRecords.map((record) => {
                const tour = record.kind === 'tour-submission' ? record.payload as TourSubmissionPayload : null;
                return (
                  <article key={record.id} className={`staff-record ${tour ? 'staff-tour-record' : ''}`}>
                    <div className={`staff-record-icon ${record.kind}`}>{tour ? '✈' : record.kind.includes('chat') ? '◌' : record.kind.includes('content') ? '✦' : '▤'}</div>
                    <div><span>{record.kind.replaceAll('-', ' ')}</span><strong>{tour?.reference || record.id}</strong><small>{new Date(record.at).toLocaleString()}</small></div>
                    {tour ? (
                      <div className="staff-tour-details">
                        <strong>{tour.customer?.fullName || 'Customer'} · {tour.customer?.country || 'Country not supplied'}</strong>
                        <span>{tour.travelDates?.arrival} → {tour.travelDates?.departure} · {tour.travellers?.adults || 0} adults · {tour.travellers?.children || 0} children</span>
                        <p>{tour.destinations?.join(' · ')}</p>
                        <small>{tour.preferences?.travelStyle} · {tour.preferences?.accommodation} · {tour.preferences?.transport}</small>
                        {tour.specialRequests && <em>Request: {tour.specialRequests}</em>}
                        <div className="staff-tour-actions">
                          <button type="button">Generate Costing</button><button type="button">Generate Quotation</button><button type="button">Assign Consultant</button>
                        </div>
                      </div>
                    ) : (
                      <p>{JSON.stringify(record.payload).slice(0, 150)}{JSON.stringify(record.payload).length > 150 ? '…' : ''}</p>
                    )}
                    <span className={`staff-status ${record.status}`}>{record.status === 'pending-review' ? 'Needs review' : record.status === 'submitted' ? 'Submitted' : 'Logged'}</span>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="staff-panel staff-content-tool" id="content">
            <div className="staff-panel-heading"><div><p>AI-assisted CMS tool</p><h2>Content copilot</h2></div><span className="staff-draft-badge">Drafts only</span></div>
            <div className="staff-content-grid">
              <form onSubmit={generate}>
                <label>Working title<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} /></label>
                <label>Source notes<textarea rows={4} value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label>
                <div><label>Tone<select value={form.tone} onChange={(event) => setForm({ ...form, tone: event.target.value })}><option>Warm & editorial</option><option>Concise & practical</option><option>Luxury & evocative</option></select></label><label>Language<select value={form.language} onChange={(event) => setForm({ ...form, language: event.target.value })}><option>English</option><option>French</option><option>German</option><option>Italian</option></select></label></div>
                <button type="submit" disabled={generating}>{generating ? 'Creating first draft…' : '✦ Create reviewable draft'}</button>
              </form>
              <div className="staff-draft-preview">
                {draft ? <><div><span>AI draft · unpublished</span><small>{draft.meta?.interactionId}</small></div><h3>{draft.title}</h3><strong>{draft.excerpt}</strong>{draft.body.split('\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<footer><button type="button">Edit in CMS</button><span>Human approval required before publishing</span></footer></> : <div className="staff-draft-placeholder"><i>✦</i><strong>Your draft will appear here</strong><span>Generated text is never published automatically.</span></div>}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
