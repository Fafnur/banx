import { InjectionToken } from '@angular/core';

export interface Environments {
  production: boolean;
  brand: string;
}

export const ENVIRONMENTS = new InjectionToken<Environments>('Environments');
