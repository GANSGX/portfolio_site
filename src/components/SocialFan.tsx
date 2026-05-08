import { SiGithub, SiTelegram } from 'react-icons/si';
import { content } from '../content';
import { MailIcon } from './Icons';

/* Stylish "link/connection" icon — three dots connected */
function SocialTriggerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="19.5" cy="12" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
      <line x1="6.1" y1="12" x2="9.8" y2="12" strokeWidth="1.2" opacity="0.4" />
      <line x1="14.2" y1="12" x2="17.9" y2="12" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

export function SocialFan() {
  const links = content.contactLinks;
  const github = links.find((l) => l.label === 'GitHub')?.href ?? '#';
  const telegram = links.find((l) => l.label === 'Telegram')?.href ?? '#';
  const email = links.find((l) => l.label === 'Email')?.href ?? '#';

  return (
    <div className="social-fan" role="group" aria-label="Social links">
      <button className="icon-btn social-fan-btn" type="button" aria-label="Social links">
        <SocialTriggerIcon />
      </button>
      <div className="social-fan-dropdown">
        <a
          className="fan-item fan-github"
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <SiGithub />
        </a>
        <a
          className="fan-item fan-telegram"
          href={telegram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Telegram"
        >
          <SiTelegram />
        </a>
        <a
          className="fan-item fan-email"
          href={email}
          aria-label="Email"
        >
          <MailIcon />
        </a>
      </div>
    </div>
  );
}
