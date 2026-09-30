import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Page not found',
  description: 'The page you are looking for could not be found.',
});

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-message">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="not-found-button">
            Back to home
          </Link>
          <Link href="/contact" className="not-found-link">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
