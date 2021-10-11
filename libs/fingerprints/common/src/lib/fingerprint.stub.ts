import { FingerprintDto, FingerprintFontsDetected } from './fingerprint.interface';

export const FINGERPRINT_FONTS_DETECTED_STUB: FingerprintFontsDetected = {
  arial: true,
};

export const FINGERPRINT_DTO_STUB: FingerprintDto<any> = {
  visitor: '123456',
  data: FINGERPRINT_FONTS_DETECTED_STUB,
};
