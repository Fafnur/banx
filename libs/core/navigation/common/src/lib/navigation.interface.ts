import { InjectionToken } from '@angular/core';

export const NAVIGATION_PATHS = {
  home: '',
  services: 'services',
  serviceCreditCards: 'services/credit-cards',
  serviceDebitCards: 'services/debit-cards',
  serviceDeposits: 'services/deposits',
  serverError: 'server-error',
  permissionDenied: 'permission-denied',
};

export interface NavigationLink {
  route: string;
  label: string;
  params?: Record<string, any>;
}

export const PATHS = new InjectionToken<Record<string, any>>('PATHS');
