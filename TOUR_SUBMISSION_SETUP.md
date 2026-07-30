# Final tour submission setup

The planner finalisation flow validates the customer request, creates an immutable submission snapshot and reference, builds a numbered route map, and generates a customer-facing PDF in memory. The backend uploads that PDF to Meta, sends its media ID to the configured company WhatsApp number, records the provider response, and clears the temporary PDF buffer.

## Required production configuration

Copy the relevant values from `.env.example` into the hosting platform's encrypted environment configuration. Never expose them with a `NEXT_PUBLIC_` prefix.

- `WHATSAPP_ACCESS_TOKEN`: Meta WhatsApp Business Cloud API system-user token.
- `WHATSAPP_PHONE_NUMBER_ID`: Cloud API sending phone-number ID.
- `COMPANY_WHATSAPP_NUMBER`: internal recipient in international, digits-only format.
- `WHATSAPP_GRAPH_API_VERSION`: Graph API version enabled for the Meta app.
- `WHATSAPP_DELIVERY_MODE=cloud`: uploads and sends the generated PDF through Meta.
- `MAPBOX_ACCESS_TOKEN`: server token used for route geocoding and static map images.

`PUPPETEER_EXECUTABLE_PATH` is optional when the Puppeteer-managed browser is available. Set it when the host supplies its own Chrome binary.

## Document lifecycle

PDFs are generated and held only in process memory. They are not written to `public/`, `.data/`, or another persistent directory. After the Meta upload/send attempt completes, the server zeroes the PDF buffer in a `finally` block.

For successful delivery, the configured phone-number ID must be registered with WhatsApp Cloud API. An on-premises or unverified number will be rejected by Meta before the document is sent.

## Operational records

Application logs should retain only the submission reference, delivery state, and provider identifiers needed for support. Access tokens, generated documents, and customer message contents must not be logged.
