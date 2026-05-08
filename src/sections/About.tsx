import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';

function StatFlip({ value, label, flip }: { value: number; label: string; flip: string }) {
  const numRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const numEl = numRef.current;
    if (!card || !numEl) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          numEl.textContent = String(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(card);
      },
      { threshold: 0.4 },
    );
    io.observe(card);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat-flip" ref={cardRef}>
      <div className="stat-flip-inner">
        <div className="stat-flip-front glass">
          <div className="stat-num" ref={numRef}>
            0
          </div>
          <div className="stat-label">{label}</div>
        </div>
        <div className="stat-flip-back glass">
          <p className="stat-desc">{flip}</p>
        </div>
      </div>
    </div>
  );
}

export function About({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const paragraphs = content.owner.about[locale].split('\n\n');
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section" id="about">
      <Eyebrow num="01" label={t.about} />

      <div className="about-stats reveal">
        {content.stats.map((s, i) => (
          <StatFlip key={i} value={s.value} label={s.label[locale]} flip={s.flip[locale]} />
        ))}
      </div>

      <div className="about-bio">
        <h3>{t.aboutHeading}</h3>
        <div className={`bio-text${expanded ? ' is-expanded' : ''}`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {paragraphs.length > 1 && (
          <button
            className="bio-toggle"
            type="button"
            onClick={() => setExpanded((x) => !x)}
          >
            {expanded
              ? locale === 'ru'
                ? '← Свернуть'
                : '← Collapse'
              : locale === 'ru'
                ? 'Читать дальше →'
                : 'Read more →'}
          </button>
        )}
      </div>
    </section>
  );
}
