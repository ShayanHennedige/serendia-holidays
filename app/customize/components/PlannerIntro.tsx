'use client';

import { useLanguage } from '../../components/LanguageProvider';
import { localeLabels, supportedLocales, type Locale } from '../../lib/i18n';
import { homeDictionaries } from '../../lib/homeI18n';

export default function PlannerIntro() {
  const { locale, setLocale, dictionary: { planner } } = useLanguage();
  return (
    <div className="planner-page-header">
      <label className="planner-language-switcher">
        <span>{homeDictionaries[locale].header.language}</span>
        <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)}>
          {supportedLocales.map((option) => <option key={option} value={option}>{localeLabels[option]}</option>)}
        </select>
      </label>
      <span className="planner-page-kicker">{planner.kicker}</span>
      <h1>{planner.titleA} <em>{planner.titleB}</em></h1>
      <p>{planner.intro}</p>
      <div className="planner-page-trust"><span>{planner.assisted}</span><span>{planner.reviewed}</span><span>{planner.unconfirmed}</span></div>
    </div>
  );
}
