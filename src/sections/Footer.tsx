import type { Locale } from '../content';
import { content, ui } from '../content';

export function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const find = (label: string) =>
    content.contactLinks.find((c) => c.label.toLowerCase() === label.toLowerCase())?.href ?? '#';

  return (
    <footer className="footer">
      <div className="left">{t.footerCopy}</div>
      <div className="right">
        <a href={find('github')} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
          GH
        </a>
        <a href={find('telegram')} target="_blank" rel="noreferrer noopener" aria-label="Telegram">
          TG
        </a>
        <a href={find('email')} aria-label="Email">
          EM
        </a>
      </div>
    </footer>
  );
}
