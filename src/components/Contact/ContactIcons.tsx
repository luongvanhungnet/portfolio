import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

interface ContactIconsProps {
  variant: 'contact' | 'footer';
}

function getAriaLabel(label: string, link: string) {
  return link.startsWith('http') ? `${label} (opens in new tab)` : label;
}

function getFooterLabel(label: string, link: string) {
  if (link.startsWith('tel:')) return 'Phone';
  if (label === 'Website') return 'Web';
  return label;
}

export default function ContactIcons({ variant }: ContactIconsProps) {
  if (variant === 'contact') {
    return (
      <ul className="contact-methods">
        {data.map((s) => (
          <li key={s.label} className="contact-method">
            <a
              href={s.link}
              className="contact-method-link"
              aria-label={getAriaLabel(s.label, s.link)}
              {...(s.link.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {s.icon ? (
                <FontAwesomeIcon
                  icon={s.icon}
                  className="contact-method-icon"
                />
              ) : null}
              <span className="contact-method-label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="icons icons--footer">
      {data.map((s) => (
        <li key={s.label}>
          <a
            href={s.link}
            aria-label={getAriaLabel(s.label, s.link)}
            {...(s.link.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {s.icon ? (
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            ) : (
              <span className="icon-text">
                {getFooterLabel(s.label, s.link)}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
