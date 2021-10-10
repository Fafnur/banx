export interface FingerprintDto<T> {
  visitor: string;
  data: T;
}

export type FingerprintFontsDto = FingerprintDto<Record<string, boolean>>;
