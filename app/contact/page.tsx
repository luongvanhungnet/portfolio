import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_EMAIL, AUTHOR_NAME } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Liên hệ',
  description: `Liên hệ ${AUTHOR_NAME} qua email ${AUTHOR_EMAIL}.`,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Liên hệ</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Email và các kênh liên hệ trong CV</p>
          </div>

          <div className="contact-divider">
            <span>hoặc kết nối qua</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
