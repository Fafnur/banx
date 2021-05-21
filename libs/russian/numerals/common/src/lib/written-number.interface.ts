import { InjectionToken } from '@angular/core';

export interface WrittenNumberUnit {
  singular: string;
  few: string;
  plural: string;
  useAlternativeBase: string;
  useSingularEnding: boolean;
  useFewEnding: boolean;
  avoidEndingRules: number[];
  avoidPrefixException: number[];
  avoidInNumberPlural: boolean;
  useBaseInstead: boolean;
  useBaseException: number[];
  useBaseExceptionWhenNoTrailingNumbers: boolean;
  andException: boolean;
  dual: string;
  restrictedPlural: boolean;
}

export interface WrittenNumberLocale {
  useLongScale: boolean;
  baseSeparator: string;
  unitSeparator: string;
  allSeparator?: string;
  generalSeparator?: string;
  wordSeparator?: string;
  base: Record<string, string>;
  alternativeBase?: Record<string, Record<string, string>>;
  units: (string | Record<string, string> | Partial<WrittenNumberUnit>)[];
  unitExceptions?: Record<string, string>;
  andWhenTrailing?: boolean;
  andException?: number[];
}

export const NUMBER_LOCALE = new InjectionToken<WrittenNumberLocale>('WrittenNumberLocale');

export interface WrittenNumberOptions {
  noAnd: boolean;
  alternativeBase?: string;
  lang: string;
}
