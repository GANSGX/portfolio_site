import type { Locale } from '../content';
import { content, ui } from '../content';
import { Marquee } from '../components/Marquee';
import { Orbits } from './Orbits';

const STACK = [
  'REACT',
  'TYPESCRIPT',
  'REACT ROUTER',
  'REDUX TOOLKIT',
  'STYLED COMPONENTS',
  'SCSS',
  'MUI',
  'AXIOS',
  'REST API',
  'FIGMA',
];

function tokens() {
  const out: React.ReactNode[] = [];
  STACK.forEach((s, i) => {
    out.push(<span key={`s-${i}`}>{s}</span>);
    out.push(<span key={`d-${i}`}>·</span>);
  });
  return out;
}

export function Hero({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const [first, second] = content.owner.name[locale];

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-top">
        <div className="hero-text">
          <div className="meta-line">
            {t.meta.replace(/^—\s*/, '')}
          </div>
          <h1 className="name">
            <span className="row">
              <span>{first}</span>
            </span>
            <span className="row">
              <span>{second}</span>
            </span>
          </h1>
          <p className="tagline">{content.owner.tagline[locale]}</p>
          <div className="hero-cta">
            <a className="btn btn-ghost" href="#exp">
              {t.heroCtaSecondary}
            </a>
            <a className="btn btn-accent" href="#contact">
              {t.heroCtaPrimary} <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <Orbits />
      </div>
      <div className="hero-bottom">
        <Marquee className="marquee-bg" duration="50s">
          {tokens()}
        </Marquee>
        <Marquee className="marquee-fg" duration="30s">
          {tokens()}
        </Marquee>
      </div>
    </section>
  );
}
