export interface FingerprintDto<T> {
  visitor: string;
  data: T;
}

export type FingerprintFontsDetected = Record<string, boolean>;

export type FingerprintFontsDto = FingerprintDto<FingerprintFontsDetected>;
