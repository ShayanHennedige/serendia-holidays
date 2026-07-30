# Serendia Holidays AI implementation

## Recommended approach

Use a hybrid, catalogue-grounded architecture:

- Claude Sonnet 5 handles natural-language understanding and high-quality drafting when `ANTHROPIC_API_KEY` is configured.
- The local catalogue engine provides deterministic search, itinerary, quote, chat and content fallbacks. This makes core journeys resilient and prevents dead links or invented products.
- Every itinerary and quote has `draft` status. Booking, price and availability requests trigger human handoff.
- AI interactions are written to the staff review trail. The local JSONL adapter is suitable for the prototype; replace it with the production CRM/database before launch.
- The content copilot creates unpublished drafts only. Publishing remains a separate human action.

## Runtime configuration

```bash
ANTHROPIC_API_KEY=your_key
CLAUDE_MODEL=claude-sonnet-5
```

Without these variables, the catalogue-assist mode remains fully usable.

## Indicative AI usage cost

As of 25 July 2026, Claude Sonnet 5 introductory pricing is USD $2 per million input tokens and $10 per million output tokens through 31 August 2026. Standard pricing from 1 September 2026 is USD $3 input / $15 output per million tokens.

At an illustrative 4,000 input + 800 output tokens per completed planner or extended concierge session, standard pricing is approximately USD $0.024 per session. At 10,000 such sessions per month, the model cost is approximately USD $240/month before caching, hosting, database, maps, email/CRM and monitoring costs. Actual spend depends on conversation length and should be controlled with token limits, caching, rate limits and monthly budget alerts.

Pricing source: https://platform.claude.com/docs/en/about-claude/pricing

## Production hardening before launch

1. Add staff authentication and role-based access to `/staff/ai-studio` and `/api/ai/review-log`.
2. Replace `.data/ai-review.jsonl` with an encrypted database/CRM review queue and a documented GDPR retention/deletion policy.
3. Connect quote enquiries to the selected CRM/email provider; the current adapter records them for review but does not send external mail.
4. Add traveller consent copy, rate limiting, abuse controls, analytics and observability.
5. Connect the catalogue adapter to the chosen CMS so AI grounding always reflects live products.
