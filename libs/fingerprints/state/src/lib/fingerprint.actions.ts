import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { CanvasFingerprint, FontsFingerprint } from '@banx/fingerprints/common';

export const run = createAction('[Fingerprint] Run');

export const detectFonts = createAction('[Fingerprint] Detect Fonts');

export const detectFontsSuccess = createAction('[Fingerprint] Detect Fonts Success', payload<FontsFingerprint>());

export const detectFontsFailure = createAction('[Fingerprint] Detect Fonts Failure', payload<Record<string, any>>());

export const saveFonts = createAction('[Fingerprint] Save Fonts', payload<FontsFingerprint>());

export const saveFontsSuccess = createAction('[Fingerprint] Save Fonts Success');

export const saveFontsFailure = createAction('[Fingerprint] Save Fonts Failure', payload<Record<string, any>>());

export const detectCanvas = createAction('[Fingerprint] Detect Canvas');

export const detectCanvasSuccess = createAction('[Fingerprint] Detect Canvas Success', payload<CanvasFingerprint>());

export const detectCanvasFailure = createAction('[Fingerprint] Detect Canvas Failure', payload<Record<string, any>>());

export const saveCanvas = createAction('[Fingerprint] Save Canvas', payload<CanvasFingerprint>());

export const saveCanvasSuccess = createAction('[Fingerprint] Save Canvas Success');

export const saveCanvasFailure = createAction('[Fingerprint] Save Canvas Failure', payload<Record<string, any>>());

export const detectGeolocation = createAction('[Fingerprint] Detect Geolocation');

export const detectGeolocationSuccess = createAction('[Fingerprint] Detect Geolocation Success', payload<GeolocationCoordinates | null>());

export const detectGeolocationFailure = createAction('[Fingerprint] Detect Geolocation Failure', payload<Record<string, any>>());

export const saveGeolocation = createAction('[Fingerprint] Save Geolocation', payload<GeolocationCoordinates | null>());

export const saveGeolocationSuccess = createAction('[Fingerprint] Save Geolocation Success');

export const saveGeolocationFailure = createAction('[Fingerprint] Save Geolocation Failure', payload<Record<string, any>>());
