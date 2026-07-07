/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://www.luongvanhungnet.xyz';
export const AUTHOR_NAME = 'Lương Văn Hưng';
export const AUTHOR_EMAIL = 'luongvanhungnet@gmail.com';
export const AUTHOR_PHONE = '(+84) 347 826 500';
export const AUTHOR_PHONE_TEL = '+84347826500';
export const AUTHOR_GITHUB_URL = 'https://github.com/luongvanhungnet';
export const AUTHOR_LINKEDIN_URL =
  'https://www.linkedin.com/in/l%C6%B0%C6%A1ng-v%C4%83n-h%C6%B0ng-216612420/';
export const AUTHOR_WEBSITE_URL = `${SITE_URL}/`;
export const TWITTER_HANDLE = '';
export const SITE_IMAGE_PATH: string | null = null;
export const SITE_IMAGE_DIMENSIONS: { width: number; height: number } | null =
  null;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'Sinh viên Công nghệ Thông tin Việt-Nhật tại Đại học Bách khoa Hà Nội, định hướng AI, Machine Learning, Deep Learning, Big Data, Data Analysis và phát triển Full-stack.';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
