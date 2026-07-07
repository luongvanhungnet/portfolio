import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {
  AUTHOR_EMAIL,
  AUTHOR_GITHUB_URL,
  AUTHOR_LINKEDIN_URL,
  AUTHOR_PHONE,
  AUTHOR_PHONE_TEL,
  AUTHOR_WEBSITE_URL,
} from '@/lib/utils';

export interface ContactItem {
  link: string;
  label: string;
  icon?: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: AUTHOR_LINKEDIN_URL,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: AUTHOR_GITHUB_URL,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: AUTHOR_WEBSITE_URL,
    label: 'Website',
  },
  {
    link: `tel:${AUTHOR_PHONE_TEL}`,
    label: AUTHOR_PHONE,
  },
  {
    link: `mailto:${AUTHOR_EMAIL}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
