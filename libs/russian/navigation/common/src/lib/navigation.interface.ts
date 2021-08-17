import { NAVIGATION_PATHS, NavigationPaths } from '@banx/core/navigation/common';

export interface RussianNavigationPaths extends NavigationPaths {
  owners: string;
  edisclosure: string;
  documents: string;
  disclosure: string;
  largestDigitalBank: string;
  changeTerms: string;
  sitemap: string;
  reject: string;
  breaks: string;
}

export const RUSSIAN_NAVIGATION_PATHS: RussianNavigationPaths = {
  ...NAVIGATION_PATHS,
  owners: '/assets/documents/owners.pdf',
  edisclosure: 'https://e-disclosure.ru/',
  documents: 'documents',
  disclosure: 'documents/disclosure',
  largestDigitalBank: '/company/news/largest-digital-bank',
  changeTerms: '/company/news/tags/terms',
  sitemap: 'company/sitemap',
  reject: 'company/reject',
  breaks: 'company/breaks',
};
