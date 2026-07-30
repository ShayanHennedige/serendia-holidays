import 'server-only';

interface WhatsAppResult {
  status: 'sent' | 'simulated';
  providerMediaId?: string;
  providerMessageId?: string;
}

interface GraphResponse {
  id?: string;
  messages?: { id?: string }[];
  error?: { message?: string };
}

export async function sendTourPdfToCompany(options: {
  pdf: Uint8Array;
  filename: string;
  caption: string;
}): Promise<WhatsAppResult> {
  const deliveryMode = process.env.WHATSAPP_DELIVERY_MODE || 'cloud';
  if (deliveryMode === 'log') {
    console.info(JSON.stringify({ kind: 'whatsapp-simulation', to: configuredCompanyNumber(), filename: options.filename, caption: options.caption }));
    return { status: 'simulated' };
  }
  if (deliveryMode !== 'cloud') {
    throw new Error('WHATSAPP_DELIVERY_MODE must be either "cloud" or "log".');
  }

  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!accessToken || !phoneNumberId || !process.env.COMPANY_WHATSAPP_NUMBER) {
    throw new Error('WhatsApp delivery is not configured. Set WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID and COMPANY_WHATSAPP_NUMBER.');
  }
  const companyNumber = normaliseCompanyNumber(process.env.COMPANY_WHATSAPP_NUMBER);

  const apiVersion = process.env.WHATSAPP_GRAPH_API_VERSION || 'v23.0';
  const endpoint = `https://graph.facebook.com/${apiVersion}/${encodeURIComponent(phoneNumberId)}`;
  const form = new FormData();
  form.set('messaging_product', 'whatsapp');
  form.set('type', 'application/pdf');
  form.set('file', new Blob([new Uint8Array(options.pdf)], { type: 'application/pdf' }), options.filename);

  const uploadResponse = await fetch(`${endpoint}/media`, {
    method: 'POST',
    headers: { authorization: `Bearer ${accessToken}` },
    body: form,
    cache: 'no-store',
    signal: AbortSignal.timeout(30_000),
  });
  const upload = await parseGraphResponse(uploadResponse);
  if (!uploadResponse.ok || !upload.id) throw new Error(upload.error?.message || 'WhatsApp media upload failed.');

  const messageResponse = await fetch(`${endpoint}/messages`, {
    method: 'POST',
    headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: companyNumber,
      type: 'document',
      document: { id: upload.id, filename: options.filename, caption: options.caption },
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(30_000),
  });
  const message = await parseGraphResponse(messageResponse);
  if (!messageResponse.ok || !message.messages?.[0]?.id) throw new Error(message.error?.message || 'WhatsApp document delivery failed.');
  return { status: 'sent', providerMediaId: upload.id, providerMessageId: message.messages[0].id };
}

function configuredCompanyNumber() {
  return process.env.COMPANY_WHATSAPP_NUMBER ? '[configured]' : '[not configured]';
}

async function parseGraphResponse(response: Response): Promise<GraphResponse> {
  try {
    return await response.json() as GraphResponse;
  } catch {
    return {};
  }
}

function normaliseCompanyNumber(value: string): string {
  const companyNumber = value.replace(/\D/g, '');
  if (!/^\d{8,15}$/.test(companyNumber)) throw new Error('COMPANY_WHATSAPP_NUMBER must use international format.');
  return companyNumber;
}
