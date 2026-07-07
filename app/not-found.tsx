import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Không tìm thấy trang',
  description: 'Không tìm thấy trang bạn đang tìm.',
});

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Không tìm thấy trang</h1>
        <p className="not-found-message">
          Trang bạn đang tìm không tồn tại hoặc đã được chuyển.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="not-found-button">
            Về trang chủ
          </Link>
          <Link href="/contact" className="not-found-link">
            Liên hệ
          </Link>
        </div>
      </div>
    </main>
  );
}
