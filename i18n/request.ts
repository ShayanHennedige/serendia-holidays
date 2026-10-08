import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { LOCALE_COOKIE, resolveLocale } from '../app/lib/localeDetection';

// One file per site section in messages/<locale>/; every locale has the same files and keys.
const messageFiles = ['common', 'tours', 'excursions', 'hotels', 'about', 'info', 'services', 'planner'] as const;

// No locale in the URL: the language is picked per request from the visitor's
// saved choice, IP country or browser language (see resolveLocale).
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LOCALE_COOKIE)?.value, await headers());
  const parts = await Promise.all(
    messageFiles.map(async (file) => (await import(`../messages/${locale}/${file}.json`)).default),
  );

  return {
    locale,
    messages: Object.assign({}, ...parts),
  };
});
