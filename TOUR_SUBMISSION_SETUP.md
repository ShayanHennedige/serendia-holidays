# Final tour submission setup

The planner finalisation flow validates the customer request, creates an immutable submission snapshot and reference, builds a numbered route map, and generates a customer-facing PDF in memory. After the PDF is created, the UI asks whether it should be emailed to the operations inbox. If confirmed, the backend regenerates the PDF from the temporary snapshot or the validated request fallback and sends it by SMTP, then clears the temporary PDF buffer.

## Required production configuration

Copy the relevant values from `.env.example` into the hosting platform's encrypted environment configuration. Never expose them with a `NEXT_PUBLIC_` prefix.

- `WHATSAPP_ACCESS_TOKEN`: Meta WhatsApp Business Cloud API system-user token.
- `WHATSAPP_PHONE_NUMBER_ID`: Cloud API sending phone-number ID.
- `COMPANY_WHATSAPP_NUMBER`: internal recipient in international, digits-only format.
- `WHATSAPP_GRAPH_API_VERSION`: Graph API version enabled for the Meta app.
- `WHATSAPP_DELIVERY_MODE=cloud`: uploads and sends the generated PDF through Meta.
- `MAPBOX_ACCESS_TOKEN`: server token used for route geocoding and static map images.
- `EMAIL_SMTP_HOST`, `EMAIL_SMTP_PORT`, `EMAIL_SMTP_USER`, `EMAIL_SMTP_PASS`: SMTP credentials for final PDF delivery.
- `EMAIL_FROM_ADDRESS`: sender address used by the email transport.
- `TOUR_SUBMISSION_EMAIL_TO`: destination inbox for the emailed PDF. Defaults to `dream@venomholidays.com`.

`PUPPETEER_EXECUTABLE_PATH` is optional when the Puppeteer-managed browser is available. Set it when the host supplies its own Chrome binary.

On Vercel, the PDF routes use `puppeteer-core` with the self-contained `@sparticuz/chromium` serverless binary. Next.js output tracing explicitly includes the compressed browser files in both function bundles.

The current flow no longer depends on WhatsApp delivery for the tour submission handoff; the final step is the SMTP email prompt.

## Document lifecycle

PDFs are generated and held only in process memory. They are not written to `public/`, `.data/`, or another persistent directory. After the email send attempt completes, the server zeroes the PDF buffer in a `finally` block.

For successful delivery, the SMTP credentials must be valid for the configured sender address, and the destination inbox must accept the incoming attachment.

## Operational records

Application logs should retain only the submission reference, delivery state, and provider identifiers needed for support. Access tokens, generated documents, and customer message contents must not be logged.
