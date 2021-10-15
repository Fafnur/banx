export interface FingerprintDto<T> {
  visitor: string;
  data: T;
}

export type FontsFingerprint = Record<string, boolean>;

export interface CanvasFingerprint {
  winding: boolean;
  geometry: string;
  text: string;
}
