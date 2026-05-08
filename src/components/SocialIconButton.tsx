import type { ReactNode } from 'react';

type Props = {
  href: string;
  label: string;
  children: ReactNode;
};

export function SocialIconButton({ href, label, children }: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);
  return (
    <a
      href={href}
      target={isExternal && !href.startsWith('mailto:') ? '_blank' : undefined}
      rel={isExternal && !href.startsWith('mailto:') ? 'noreferrer noopener' : undefined}
      aria-label={label}
      title={label}
      className="icon-btn"
    >
      {children}
    </a>
  );
}
