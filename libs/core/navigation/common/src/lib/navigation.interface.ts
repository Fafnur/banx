import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  home: string;
  services: string;
  serviceCreditCards: string;
  serviceDebitCards: string;
  serviceDeposits: string;
  serverError: string;
  permissionDenied: string;
  application: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  home: '',
  services: 'services',
  serviceCreditCards: 'services/credit-cards',
  serviceDebitCards: 'services/debit-cards',
  serviceDeposits: 'services/deposits',
  serverError: 'server-error',
  permissionDenied: 'permission-denied',
  application: '/download/latest',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, any>;
}

export const PATHS = new InjectionToken<Record<string, any>>('NavigationPaths');
