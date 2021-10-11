import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { FingerprintFontsDetected } from '@banx/fingerprints/common';

export const run = createAction('[Fingerprint] Run');

export const detectFonts = createAction('[Fingerprint] Detect Fonts');

export const detectFontsSuccess = createAction('[Fingerprint] Detect Fonts Success', payload<FingerprintFontsDetected>());

export const detectFontsFailure = createAction('[Fingerprint] Detect Fonts Failure', payload<Record<string, any>>());

export const saveFonts = createAction('[Fingerprint] Save Fonts', payload<FingerprintFontsDetected>());

export const saveFontsSuccess = createAction('[Fingerprint] Save Fonts Success');

export const saveFontsFailure = createAction('[Fingerprint] Save Fonts Failure', payload<Record<string, any>>());
