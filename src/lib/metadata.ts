import type { Metadata } from 'next';

import {
  AUTHOR_NAME,
  SITE_IMAGE_DIMENSIONS,
  SITE_IMAGE_PATH,
  SITE_URL,
  TWITTER_HANDLE,
} from './utils';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: `/${string}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const absoluteUrl = path ? new URL(path, SITE_URL).toString() : undefined;
  const pageTitle = `${title} | ${AUTHOR_NAME}`;
  const openGraphImages =
    SITE_IMAGE_PATH && SITE_IMAGE_DIMENSIONS
      ? [
          {
            url: SITE_IMAGE_PATH,
            width: SITE_IMAGE_DIMENSIONS.width,
            height: SITE_IMAGE_DIMENSIONS.height,
            alt: AUTHOR_NAME,
          },
        ]
      : undefined;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      siteName: AUTHOR_NAME,
      title: pageTitle,
      description,
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
      ...(openGraphImages ? { images: openGraphImages } : {}),
    },
    twitter: {
      card: SITE_IMAGE_PATH ? 'summary_large_image' : 'summary',
      ...(TWITTER_HANDLE
        ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE }
        : {}),
      title: pageTitle,
      description,
      ...(SITE_IMAGE_PATH ? { images: [SITE_IMAGE_PATH] } : {}),
    },
  };
}
