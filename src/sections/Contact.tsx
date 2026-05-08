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
  const heading = content.contactSection.heading[locale].toUpperCase();
  const openLabel = locale === 'ru' ? 'ОТКРЫТЬ' : 'OPEN';

  return (
    <section className="section contact" id="contact">
      <Eyebrow num="05" label={t.contact} />
      <h2 className="contact-headline" data-letter-split>
        {[...heading].map((ch, i) => (
          <span key={i} className="ch" style={{ ['--i' as never]: i } as React.CSSProperties}>
            {ch}
          </span>
        ))}
      </h2>
      <div className="contact-grid">
        {content.contactLinks.map((link) => {
          const brand = BRAND[link.label] ?? BRAND.Email;
          return (
            <a
              key={link.label}
              className="contact-card glass"
              href={link.href}
              data-contact={link.label.toLowerCase()}
              target={/^https?:/.test(link.href) ? '_blank' : undefined}
              rel={/^https?:/.test(link.href) ? 'noopener noreferrer' : undefined}
              style={{ ['--brand-color' as never]: brand.color, ['--brand-shadow' as never]: brand.shadow } as React.CSSProperties}
            >
              <span className="contact-icon">
                <ContactIcon label={link.label} />
              </span>
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
              <span className="contact-open">
                {openLabel} <span className="arrow">→</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
