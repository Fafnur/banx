export interface FingerprintDto<T> {
  visitor: string;
  process?: string;
  data: T;
}

export type FontsFingerprint = Record<string, boolean>;

export interface CanvasFingerprint {
  winding: boolean;
  geometry: string;
  text: string;
}
