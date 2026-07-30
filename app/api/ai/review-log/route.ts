import { timingSafeEqual } from 'node:crypto';
import { readAiInteractions } from '../../../lib/log';

export async function GET(request: Request) {
  const configuredToken = process.env.STAFF_DASHBOARD_TOKEN;
  if (configuredToken && !validToken(request.headers.get('x-staff-token'), configuredToken)) {
    return Response.json({ error: 'Staff authentication required.' }, { status: 401 });
  }
  if (!configuredToken && process.env.NODE_ENV === 'production') {
    return Response.json({ error: 'STAFF_DASHBOARD_TOKEN is not configured.' }, { status: 503 });
  }

  return Response.json({ records: readAiInteractions(60) });
}

function validToken(provided: string | null, expected: string) {
  if (!provided) return false;
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
