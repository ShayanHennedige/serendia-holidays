'use client';

import { useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatConcierge() {
  const pathname = usePathname();
  const { locale, dictionary: { chat } } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [handoff, setHandoff] = useState(false);

  const visibleMessages = messages.length ? messages : [{ role: 'assistant' as const, content: chat.greeting }];
  const initialSuggestions = {
    en: ['7 days · wildlife + beach', 'Boutique culture trip', 'Cricket group tour'],
    fr: ['7 jours · safari + plage', 'Culture et boutique', 'Voyage cricket'],
    de: ['7 Tage · Safari + Strand', 'Kultur & Boutique', 'Cricket-Reise'],
    it: ['7 giorni · safari + mare', 'Cultura e boutique', 'Viaggio cricket'],
    es: ['7 días · safari + playa', 'Cultura y hoteles boutique', 'Viaje de críquet'],
    lt: ['7 dienos · gamta + paplūdimys', 'Kultūra ir išskirtiniai viešbučiai', 'Kriketo kelionė'],
  };
  const visibleSuggestions = suggestions.length ? suggestions : initialSuggestions[locale];

  if (pathname === '/customize') {
    return null;
  }

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || loading) {
      return;
    }

    const nextMessages: ChatMessage[] = [...visibleMessages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages, language: locale }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'The chat concierge is temporarily unavailable.');
        return;
      }

      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
      setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
      setHandoff(Boolean(data.handoff));
    } catch {
      setError('The chat concierge is temporarily unavailable. Please try the Contact page.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-concierge">
      {open && (
        <div className="ai-concierge-panel" role="dialog" aria-label="Serendia Holidays AI concierge">
          <div className="ai-concierge-header">
            <div><i /><span>{chat.title}<small>{chat.online}</small></span></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="ai-concierge-messages">
            {visibleMessages.map((message, index) => (
              <div key={index} className={`ai-concierge-message ai-concierge-message-${message.role}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="ai-concierge-message ai-concierge-message-assistant ai-concierge-typing">{chat.thinking}</div>}
            {error && <div className="ai-concierge-error">{error} Or <a href="/contact">contact us directly</a>.</div>}
          </div>
          {handoff && <a className="ai-concierge-handoff" href="/contact"><span>{chat.handoff}</span><strong>{chat.specialist}</strong></a>}
          {visibleSuggestions.length > 0 && (
            <div className="ai-concierge-suggestions">
              {visibleSuggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => setInput(suggestion)}>{suggestion}</button>)}
            </div>
          )}
          <form className="ai-concierge-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={chat.placeholder}
              aria-label="Message"
            />
            <button type="submit" disabled={loading}>{chat.send}</button>
          </form>
          <p className="ai-concierge-notice">{chat.notice}</p>
        </div>
      )}
      <button
        type="button"
        className="ai-concierge-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close AI concierge chat' : 'Open AI concierge chat'}
      >
        {open ? (
          '×'
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
