import { SiGithub, SiTelegram } from 'react-icons/si';
import type { Locale } from '../content';
import { content, ui } from '../content';
import { Eyebrow } from '../components/Eyebrow';
import { MailIcon } from '../components/Icons';

const BRAND: Record<string, { color: string; shadow: string }> = {
  GitHub:   { color: '#e8eaf6', shadow: 'rgba(232,234,246,0.18)' },
  Telegram: { color: '#2CA5E0', shadow: 'rgba(44,165,224,0.20)' },
  Email:    { color: '#ff7070', shadow: 'rgba(255,112,112,0.20)' },
};

function ContactIcon({ label }: { label: string }) {
  if (label === 'GitHub')   return <SiGithub />;
  if (label === 'Telegram') return <SiTelegram />;
  return <MailIcon />;
}

export function Contact({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const heading = locale === 'ru' ? ['Связь', 'со мной'] : ['Get', 'in touch'];
  const kicker = locale === 'ru'
    ? 'Открыт к новым проектам и интересным предложениям'
    : 'Open to new projects and interesting opportunities';
  const actionLabels: Record<string, string> = {
    GitHub: locale === 'ru' ? 'Открыть профиль' : 'Open profile',
    Telegram: locale === 'ru' ? 'Написать' : 'Message me',
    Email: locale === 'ru' ? 'Отправить письмо' : 'Send email',
  };

  return (
    <section className="section contact" id="contact">
      <Eyebrow num="05" label={t.contact} />
      <div className="contact-stage">
        <div className="contact-copy">
          <h2 className="contact-headline" data-letter-split>
            {heading.map((row, rowIndex) => (
              <span className={`contact-row${rowIndex === 1 ? ' is-outline' : ''}`} key={row}>
                {[...row.toUpperCase()].map((ch, i) => (
                  <span
                    key={`${row}-${i}`}
                    className="ch"
                    style={{ ['--i' as never]: rowIndex * 12 + i } as React.CSSProperties}
                  >
                    {ch === ' ' ? '\u00a0' : ch}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="contact-kicker">{kicker}</p>

          <div className="contact-grid">
            {content.contactLinks.map((link, index) => {
              const brand = BRAND[link.label] ?? BRAND.Email;
              return (
                <a
                  key={link.label}
                  className="contact-card"
                  href={link.href}
                  data-contact={link.label.toLowerCase()}
                  target={/^https?:/.test(link.href) ? '_blank' : undefined}
                  rel={/^https?:/.test(link.href) ? 'noopener noreferrer' : undefined}
                  style={{ ['--brand-color' as never]: brand.color, ['--brand-shadow' as never]: brand.shadow } as React.CSSProperties}
                >
                  <span className="contact-num">0{index + 1}</span>
                  <span className="contact-icon">
                    <ContactIcon label={link.label} />
                  </span>
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-line" />
                  <span className="contact-open">
                    {actionLabels[link.label] ?? (locale === 'ru' ? 'Открыть' : 'Open')}
                    <span className="arrow">↗</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact-visual" aria-hidden="true">
          <span className="contact-crosshair" />
          <span className="contact-scan scan-a" />
          <span className="contact-scan scan-b" />
          <span className="contact-corner corner-a" />
          <span className="contact-corner corner-b" />
          <span className="contact-node node-a" />
          <span className="contact-node node-b" />
          <span className="contact-node node-c" />
        </div>
      </div>
    </section>
  );
}
