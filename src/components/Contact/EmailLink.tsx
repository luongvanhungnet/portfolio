import { AUTHOR_EMAIL } from '@/lib/utils';

export default function EmailLink() {
  const [localPart, domain] = AUTHOR_EMAIL.split('@');

  return (
    <div className="contact-email-container">
      <a href={`mailto:${AUTHOR_EMAIL}`} className="contact-email-link">
        <span className="contact-email-prefix">{localPart}</span>
        <span className="contact-email-domain">@{domain}</span>
      </a>
    </div>
  );
}
