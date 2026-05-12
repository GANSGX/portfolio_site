import { useEffect, useRef, useState } from 'react';
import {
  SiAxios,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiCss,
  SiCssmodules,
  SiZod,
} from 'react-icons/si';
import { Clock3, Diamond, MessageCircle, Shield, TrendingUp, UsersRound, Zap, Target } from 'lucide-react';
import type { Locale, SoftSkillIcon } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';
import { Marquee } from '../components/Marquee';

type IconFC = React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;

const TECH_ICONS: Record<string, { Icon: IconFC; color: string }> = {
  JavaScript:         { Icon: SiJavascript as IconFC,         color: '#F7DF1E' },
  TypeScript:         { Icon: SiTypescript as IconFC,         color: '#3178C6' },
  React:              { Icon: SiReact as IconFC,              color: '#61DAFB' },
  'React Router':     { Icon: SiReactrouter as IconFC,        color: '#CA4245' },
  'Redux Toolkit':    { Icon: SiRedux as IconFC,              color: '#764ABC' },
  HTML:               { Icon: SiHtml5 as IconFC,              color: '#E34F26' },
  CSS:                { Icon: SiCss as IconFC,                color: '#1572B6' },
  SCSS:               { Icon: SiSass as IconFC,               color: '#CC6699' },
  'Styled Components':{ Icon: SiStyledcomponents as IconFC,   color: '#DB7093' },
  'CSS Modules':      { Icon: SiCssmodules as IconFC,         color: '#000acd' },
  MUI:                { Icon: SiMui as IconFC,                color: '#007FFF' },
  Axios:              { Icon: SiAxios as IconFC,              color: '#5A29E4' },
  Figma:              { Icon: SiFigma as IconFC,              color: '#F24E1E' },
  Git:                { Icon: SiGit as IconFC,                color: '#F05032' },
  Zod:                { Icon: SiZod as IconFC,                color: '#3068B7' },
};

const SOFT_ICONS: Record<SoftSkillIcon, IconFC> = {
  message: MessageCircle as IconFC,
  shield:  Shield as IconFC,
  brain:   Zap as IconFC,
  target:  Target as IconFC,
  clock:   Clock3 as IconFC,
  users:   UsersRound as IconFC,
  diamond: Diamond as IconFC,
  trend:   TrendingUp as IconFC,
};

const MARQUEE_TOKENS = [
  'REACT', 'TYPESCRIPT', 'REACT ROUTER', 'RTK',
  'STYLED COMPONENTS', 'SCSS', 'MUI', 'AXIOS', 'REST API', 'ZOD', 'GIT', 'FIGMA',
];

const SOFT_TITLE = 'SOFT SKILLS';

const TAG_OFFSETS: Array<[number, number]> = [
  [-40,-30],[50,-20],[-60,30],[30,40],[-20,-50],[60,20],[-40,50],
  [50,-40],[-50,-20],[40,30],[-30,40],[60,-10],[-50,20],[30,-30],
  [-40,-40],[50,40],[-20,30],[40,-20],[-50,-30],[30,50],
];

function TechTag({ tag, i }: { tag: string; i: number }) {
  const meta = TECH_ICONS[tag];
  const [dx, dy] = TAG_OFFSETS[i % TAG_OFFSETS.length];
  const size = i < 2 ? 'size-xl' : i < 5 ? 'size-lg' : '';
  return (
    <span
      className={`tag ${size}`.trim()}
      style={{ ['--i' as never]: i, ['--dx' as never]: `${dx}px`, ['--dy' as never]: `${dy}px` } as React.CSSProperties}
    >
      {meta && (
        <span className="tag-icon" style={{ color: meta.color }}>
          <meta.Icon size={14} />
        </span>
      )}
      {tag}
    </span>
  );
}

export function Skills({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const [tab, setTab] = useState<'hard' | 'soft'>('hard');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const revealEls = Array.from(section.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if (!revealEls.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [tab]);

  const tags = (() => {
    const seen = new Set<string>();
    const list: string[] = [];
    content.skills.forEach((cat) =>
      cat.values.split(',').forEach((v) => {
        const tv = v.trim();
        if (tv && !seen.has(tv)) { seen.add(tv); list.push(tv); }
      }),
    );
    return list;
  })();

  const marqueeTokens: React.ReactNode[] = [];
  MARQUEE_TOKENS.forEach((s, i) => {
    marqueeTokens.push(<span key={`s-${i}`}>{s}</span>);
    marqueeTokens.push(<span key={`d-${i}`}>·</span>);
  });

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <Eyebrow num="03" label={t.skills} />

      <div className="skills-tabs">
        <button
          type="button"
          className={`skills-tab${tab === 'hard' ? ' is-active' : ''}`}
          onClick={() => setTab('hard')}
        >
          {locale === 'ru' ? 'ХАРД НАВЫКИ' : 'HARD SKILLS'}
        </button>
        <button
          type="button"
          className={`skills-tab${tab === 'soft' ? ' is-active' : ''}`}
          onClick={() => setTab('soft')}
        >
          {locale === 'ru' ? 'СОФТ НАВЫКИ' : 'SOFT SKILLS'}
        </button>
      </div>

      <div className={`skills-marquee-card${tab === 'soft' ? ' is-soft' : ''}`}>
        {tab === 'hard' ? (
            <Marquee duration="38s">{marqueeTokens}</Marquee>
        ) : (
          <div className="soft-marquee-lock" aria-label="Soft skills">
            <span className="soft-dots" aria-hidden="true" />
            <span>{SOFT_TITLE}</span>
            <span className="soft-dots" aria-hidden="true" />
          </div>
        )}
      </div>

      {tab === 'hard' && (
        <>
          <div className="skills-grid">
            <div className="tag-cloud reveal">
              {tags.map((tag, i) => (
                <TechTag key={tag} tag={tag} i={i} />
              ))}
            </div>
            <div className="categories">
              {content.skills.map((cat) => (
                <div className="cat" key={cat.category}>
                  <div className="cat-title">{cat.category}</div>
                  <div className="cat-list">
                    {cat.values.split(',').map((v) => {
                      const tv = v.trim();
                      const meta = TECH_ICONS[tv];
                      return (
                        <span key={tv} className="cat-item">
                          {meta && (
                            <span className="cat-icon" style={{ color: meta.color }}>
                              <meta.Icon size={13} />
                            </span>
                          )}
                          {tv}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === 'soft' && (
        <div className="soft-grid">
          {content.softSkills.map((sk, i) => {
            const Icon = SOFT_ICONS[sk.icon];
            return (
              <div
                key={i}
                className="soft-card glass reveal"
                style={{ ['--i' as never]: i } as React.CSSProperties}
              >
                <span className="soft-icon">
                  <Icon size={28} />
                </span>
                <span className="soft-num">0{i + 1}</span>
                <h4 className="soft-title">{sk.label[locale]}</h4>
                <p className="soft-desc">{sk.description[locale]}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
