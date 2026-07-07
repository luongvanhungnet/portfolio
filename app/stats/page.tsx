import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Thống kê',
  description: 'Chưa có dữ liệu thống kê cá nhân.',
  path: '/stats/',
});

export default function StatsPage() {
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">Thống kê</h1>
          <p className="stats-subtitle">Chưa có dữ liệu thống kê cá nhân.</p>
        </header>
      </section>
    </PageWrapper>
  );
}
