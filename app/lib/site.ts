export const siteName = 'Serendia Holidays';

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.serendiaholidays.com';

export const siteUrl = configuredUrl.replace(/\/$/, '');

export function siteUrlFor(path = '/') {
  return new URL(path, `${siteUrl}/`).toString();
}
