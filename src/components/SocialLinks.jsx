import { Facebook, Instagram } from 'lucide-react';

const profiles = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19oyP18Pys/',
    Icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raasmusicacademy?xtok=cjEyMWNuMnRzYzA3',
    Icon: Instagram,
  },
];

export default function SocialLinks({ variant = 'contact' }) {
  const isFooter = variant === 'footer';

  return (
    <div className={isFooter ? 'footer-social-links' : 'social-links'} aria-label="Raas social media">
      {profiles.map(({ label, href, Icon }) => (
        <a
          className={isFooter ? 'footer-social-link' : 'social-link'}
          href={href}
          key={label}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit Raas on ${label}`}
          title={label}
        >
          <Icon size={16} aria-hidden="true" />
          {isFooter && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
