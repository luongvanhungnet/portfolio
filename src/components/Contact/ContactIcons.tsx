import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

export default function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a
            href={s.link}
            aria-label={
              s.link.startsWith('http')
                ? `${s.label} (opens in new tab)`
                : s.label
            }
            {...(s.link.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {s.icon ? (
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            ) : (
              <span className="icon-text">{s.label}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
