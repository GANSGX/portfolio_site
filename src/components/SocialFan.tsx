import { SiGithub, SiTelegram } from 'react-icons/si';
import { content } from '../content';
import { MailIcon } from './Icons';

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
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
        <ShareIcon />
      </button>
      <div className="social-fan-dropdown" aria-hidden="true">
        <a
          className="fan-item fan-github"
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
          tabIndex={-1}
        >
          <SiGithub />
        </a>
        <a
          className="fan-item fan-telegram"
          href={telegram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Telegram"
          tabIndex={-1}
        >
          <SiTelegram />
        </a>
        <a
          className="fan-item fan-email"
          href={email}
          aria-label="Email"
          tabIndex={-1}
        >
          <MailIcon />
        </a>
      </div>
    </div>
  );
}
