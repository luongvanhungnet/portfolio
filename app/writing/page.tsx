import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import writing from '@/data/writing';
import { createPageMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/posts';
import {
  blogNode,
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
  WRITING_DESCRIPTION,
} from '@/lib/schema';
import { formatDate } from '@/lib/utils';

const WRITING_URL = `${SITE_URL}/writing/`;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Bài viết',
    description: WRITING_DESCRIPTION,
    path: '/writing/',
  }),
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

interface UnifiedItem {
  title: string;
  url: string;
  date: string;
  description: string;
  isExternal: boolean;
}

interface WritingItemProps {
  item: UnifiedItem;
  showDate?: boolean;
}

function WritingItem({ item, showDate = true }: WritingItemProps) {
  const content = (
    <>
      {showDate && item.date && (
        <time className="writing-date" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      )}
      <h2 className="writing-title">{item.title}</h2>
      <p className="writing-description">{item.description}</p>
      {item.isExternal && (
        <span className="writing-external" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-item"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url} className="writing-item">
      {content}
    </Link>
  );
}

export default function WritingPage() {
  const internalPosts = getAllPosts();
  const internalItems: UnifiedItem[] = internalPosts.map((post) => ({
    title: post.title,
    url: `/writing/${post.slug}`,
    date: post.date,
    description: post.description,
    isExternal: false,
  }));

  const externalItems: UnifiedItem[] = writing.map((item) => ({
    ...item,
    isExternal: true,
  }));

  const allItems = [...internalItems, ...externalItems];
  const dated = allItems
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const undated = allItems.filter((item) => !item.date);
  const latestPostDate = dated[0]?.date;

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: WRITING_URL,
            name: 'Bài viết',
            description: WRITING_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          blogNode(latestPostDate),
          breadcrumbNode(WRITING_URL, [
            { name: 'Trang chủ', url: HOME_URL },
            { name: 'Bài viết', url: WRITING_URL },
          ]),
        ]}
      />
      <article className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Bài viết</h1>
            <a
              href="/feed.xml"
              className="writing-rss-link"
              title="RSS Feed"
              aria-label="RSS Feed"
            >
              RSS
            </a>
          </div>
        </header>

        <div className="writing-list">
          {dated.map((item) => (
            <WritingItem key={item.url} item={item} />
          ))}

          {undated.length > 0 && (
            <>
              <div className="writing-section-label">Không có ngày</div>
              {undated.map((item) => (
                <WritingItem key={item.url} item={item} showDate={false} />
              ))}
            </>
          )}

          {dated.length === 0 && undated.length === 0 ? (
            <p className="writing-description">Chưa có bài viết.</p>
          ) : null}
        </div>
      </article>
    </PageWrapper>
  );
}
