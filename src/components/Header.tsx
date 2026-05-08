import { useEffect, useState } from 'react';
import type { Locale } from '../content';
import { content, ui } from '../content';
import { LangSwitch } from './LangSwitch';
import { SocialFan } from './SocialFan';

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const NAV_KEYS = ['about', 'experience', 'skills', 'contact'] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  about: '#about',
  experience: '#exp',
  skills: '#skills',
  contact: '#contact',
};

function NavItem({ label, href }: { label: string; href: string }) {
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const spans = e.currentTarget.querySelectorAll<HTMLSpanElement>('.ch');
    spans.forEach((s, i) => {
      setTimeout(() => {
        s.classList.add('is-lit');
        setTimeout(() => s.classList.remove('is-lit'), 260);
      }, i * 30);
    });
  };
  return (
    <a className="nav-item" href={href} onMouseEnter={onEnter}>
      {[...label].map((ch, i) =>
        ch === ' ' ? (
          <span key={i} className="ch-space">&thinsp;&thinsp;</span>
        ) : (
          <span key={i} className="ch">
            {ch}
          </span>
        ),
      )}
    </a>
  );
}

export function Header({ locale, setLocale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const t = ui[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="brand">
        <span className="brand-mark">{content.owner.initials}</span>
        <span className="brand-divider" />
        <span className="brand-tag">{t.portfolio}</span>
      </div>

      <nav className="nav" aria-label="primary">
        {NAV_KEYS.map((key, i) => (
          <span key={key} style={{ display: 'contents' }}>
            <NavItem label={t[key].toUpperCase()} href={NAV_HREFS[key]} />
            {i < NAV_KEYS.length - 1 ? <span className="nav-sep">·</span> : null}
          </span>
        ))}
      </nav>

      <div className="actions">
        <SocialFan />
        <LangSwitch locale={locale} setLocale={setLocale} />
      </div>
    </header>
  );
}
