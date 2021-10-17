import { CanvasFingerprint, FingerprintDto, FontsFingerprint } from './fingerprint.interface';

export const FONTS_FINGERPRINT_STUB: FontsFingerprint = {
  arial: true,
};

export const FONTS_FINGERPRINT_DTO_STUB: FingerprintDto<any> = {
  visitor: '123456',
  data: FONTS_FINGERPRINT_STUB,
};

export const CANVAS_FINGERPRINT_STUB: CanvasFingerprint = {
  text: '1234',
  geometry: '1234',
  winding: true,
};

export const CANVAS_FINGERPRINT_DTO_STUB: FingerprintDto<CanvasFingerprint> = {
  visitor: '123456',
  data: CANVAS_FINGERPRINT_STUB,
};

export const GEOLOCATION_COORDINATES_STUB: GeolocationCoordinates = {
  accuracy: 1,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: 20.2,
  longitude: 20.2,
  speed: null,
};

export const GEOLOCATION_FINGERPRINT_DTO_STUB: FingerprintDto<GeolocationCoordinates> = {
  visitor: '123456',
  data: GEOLOCATION_COORDINATES_STUB,
};
