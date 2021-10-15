import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { CanvasFingerprint, FingerprintDto, FontsFingerprint } from '@banx/fingerprints/common';

export const FINGERPRINT_API_ROUTES = {
  saveFonts: '/data/fonts',
  saveCanvas: '/data/canvas',
};

@Injectable()
export class FingerprintApiService {
  constructor(private readonly apiService: ApiService) {}

  saveFonts(payload: FingerprintDto<FontsFingerprint>): Observable<void> {
    return this.apiService.post(FINGERPRINT_API_ROUTES.saveFonts, payload);
  }

  saveCanvas(payload: FingerprintDto<CanvasFingerprint>): Observable<void> {
    return this.apiService.post(FINGERPRINT_API_ROUTES.saveCanvas, payload);
  }
}
