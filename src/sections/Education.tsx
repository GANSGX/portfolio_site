import type { Locale } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';

export function Education({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const ed = content.education;

  return (
    <section className="section" id="education" data-screen-label="05 Education">
      <Eyebrow num="04" label={t.education} />
      <div className="tl-card glass reveal">
        <div className="tl-head">
          <span className="tl-date">{ed.graduation[locale].toUpperCase()}</span>
          <span className="tl-company">{ed.institution}</span>
        </div>
        <p className="tl-desc">{ed.note[locale]}</p>
      </div>
    </section>
  );
}
