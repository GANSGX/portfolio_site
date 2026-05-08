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

function OwnerName({ locale }: { locale: Locale }) {
  return <>{content.owner.name[locale].join(' ')}</>;
}

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
  const [menuOpen, setMenuOpen] = useState(false);
  const t = ui[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-is-open' : ''}`}>
        <a className="brand" href="#top" aria-label="Scroll to top" onClick={closeMenu}>
          <span className="brand-mark">{content.owner.initials}</span>
          <span className="brand-name">
            <OwnerName locale={locale} />
          </span>
          <span className="brand-divider" />
          <span className="brand-tag">{t.portfolio}</span>
        </a>

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

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-menu-bg" />
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <a className="mobile-menu-brand" href="#top" onClick={closeMenu}>
              <OwnerName locale={locale} />
            </a>
            <button className="mobile-menu-close" type="button" aria-label="Close menu" onClick={closeMenu}>
              <span />
              <span />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="mobile primary">
            {NAV_KEYS.map((key, i) => (
              <a
                className="mobile-nav-item"
                href={NAV_HREFS[key]}
                key={key}
                onClick={closeMenu}
                style={{ ['--i' as never]: i } as React.CSSProperties}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                <span>{t[key]}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <SocialFan />
            <LangSwitch locale={locale} setLocale={setLocale} />
          </div>
        </div>
      </div>
    </>
  );
}
