import { appendFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface AiReviewRecord {
  id: string;
  at: string;
  kind: string;
  status: 'logged' | 'pending-review' | 'submitted';
  payload: unknown;
}

const dataDirectory = join(process.cwd(), '.data');
const logFile = join(dataDirectory, 'ai-review.jsonl');

export function logAiInteraction(kind: string, payload: unknown, status: AiReviewRecord['status'] = 'logged'): AiReviewRecord {
  const record: AiReviewRecord = {
    id: `AI-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    at: new Date().toISOString(),
    kind,
    status,
    payload,
  };

  console.log(JSON.stringify(record));
  try {
    mkdirSync(dataDirectory, { recursive: true });
    appendFileSync(logFile, `${JSON.stringify(record)}\n`, 'utf8');
  } catch (error) {
    console.warn('Could not persist AI review record locally.', error);
  }
  return record;
}

export function readAiInteractions(limit = 40): AiReviewRecord[] {
  try {
    return readFileSync(logFile, 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line) as AiReviewRecord)
      .slice(-limit)
      .reverse();
  } catch {
    return [];
  }
}
