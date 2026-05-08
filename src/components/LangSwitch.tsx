import type { Locale } from '../content';

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

export function LangSwitch({ locale, setLocale }: Props) {
  return (
    <div className="lang" role="tablist" aria-label="language">
      <button
        type="button"
        className={locale === 'ru' ? 'is-active' : ''}
        onClick={() => setLocale('ru')}
      >
        RU
      </button>
      <button
        type="button"
        className={locale === 'en' ? 'is-active' : ''}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  );
}
