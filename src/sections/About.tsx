import { useEffect, useRef } from 'react';
import type { Locale } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';

type Stat = (typeof content.stats)[number];

function StatCard({ stat, locale, index }: { stat: Stat; locale: Locale; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const numEl = numRef.current;
    if (!card || !numEl) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        card.classList.add('is-in');
        const target = stat.value;
        const start = performance.now();
        const dur = 1500;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          numEl.textContent = String(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(card);
      },
      { threshold: 0.25 },
    );
    io.observe(card);
    return () => io.disconnect();
  }, [stat.value]);

  const isWide = stat.size === 'wide';
  const className = [
    'stat-card',
    'glass',
    isWide ? 'stat-wide' : '',
    stat.accent ? 'stat-accent' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={className}
      ref={cardRef}
      style={{ ['--i' as never]: index } as React.CSSProperties}
    >
      {stat.accent && <span className="stat-square" aria-hidden="true" />}
      <div className="stat-head">
        <span className="stat-num" ref={numRef}>
          0
        </span>
        <span className="stat-label">{stat.label[locale]}</span>
      </div>
      <p className="stat-desc">{stat.description[locale]}</p>
      <span className="stat-divider" />
      <p className="stat-source">{stat.source[locale]}</p>
      <p className="stat-tags">{stat.tags[locale]}</p>
    </div>
  );
}

function highlightBio(paragraph: string, locale: Locale) {
  const ru = ['им удобно пользоваться', 'За 3 года', 'большой легаси-кодовой базой', 'точечно улучшать', 'не ломать то, что уже работает', 'нормальная коммуникация'];
  const en = ['comfortable to use', 'Over 3 years', 'large legacy codebase', 'improve it point by point', 'avoid breaking what already works', 'healthy communication'];
  const keys = locale === 'ru' ? ru : en;
  const pattern = new RegExp(`(${keys.join('|')})`, 'gi');
  const parts = paragraph.split(pattern);
  return parts.map((part, i) =>
    keys.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function About({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const headline = content.owner.aboutHeadline[locale];
  const paragraphs = content.owner.about[locale].split('\n\n');
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <Eyebrow num="01" label={t.about} />

      <div className="about-grid">
        <div className="about-left">
          <h2 className="about-headline" ref={headlineRef}>
            {headline.map((row, i) => (
              <span key={i} className={`row${i === 1 ? ' row-outline' : ''}`}>
                {[...row].map((ch, j) =>
                  ch === ' ' ? (
                    <span key={j} className="ch-space">&nbsp;</span>
                  ) : (
                    <span
                      key={j}
                      className="ch"
                      style={{ ['--i' as never]: i * 14 + j } as React.CSSProperties}
                    >
                      {ch}
                    </span>
                  ),
                )}
              </span>
            ))}
          </h2>

          <div className="about-bio">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="bio-para reveal"
                style={{ ['--i' as never]: i } as React.CSSProperties}
              >
                <span className="bio-dot" aria-hidden="true" />
                <span className="bio-text">{highlightBio(p, locale)}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {content.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} locale={locale} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
