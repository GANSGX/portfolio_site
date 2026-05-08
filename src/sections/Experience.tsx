import { useEffect, useRef } from 'react';
import type { Locale } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';

export function Experience({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const fill = timeline.querySelector<HTMLDivElement>('.timeline-fill');
    const items = Array.from(timeline.querySelectorAll<HTMLDivElement>('.tl-item'));
    if (!fill) return;

    const update = () => {
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.6;
      const end = -r.height + vh * 0.4;
      const total = start - end;
      const passed = Math.max(0, Math.min(total, start - r.top));
      const pct = total > 0 ? passed / total : 0;
      fill.style.height = pct * 100 + '%';

      const fillBottom = r.top + r.height * pct;
      items.forEach((item) => {
        const dot = item.querySelector<HTMLDivElement>('.tl-dot');
        if (!dot) return;
        const dr = dot.getBoundingClientRect();
        const active = dr.top + dr.height / 2 < fillBottom + 6;
        item.classList.toggle('is-active', active);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="section" id="exp" data-screen-label="03 Experience">
      <Eyebrow num="02" label={t.experience} />
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-rail">
          <div className="timeline-fill" />
        </div>
        {content.experience.map((item, i) => {
          const company = typeof item.company === 'string' ? item.company : item.company[locale];
          return (
            <div className="tl-item" key={i}>
              <div className="tl-dot" />
              <div className="tl-card glass">
                <div className="tl-head">
                  <span className="tl-date">{item.period[locale].toUpperCase()}</span>
                  <span className="tl-company">{company}</span>
                </div>
                <div className="tl-role">{item.role[locale]}</div>
                <p className="tl-desc">{item.description[locale]}</p>
                {item.url ? (
                  <a className="tl-open" href={item.url} target="_blank" rel="noreferrer noopener">
                    {t.openLink} <span className="arrow">→</span>
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
