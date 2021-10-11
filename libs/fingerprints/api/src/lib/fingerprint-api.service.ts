import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { FingerprintDto, FingerprintFontsDetected } from '@banx/fingerprints/common';

export const FINGERPRINT_API_ROUTES = {
  saveFonts: '/data/fonts',
};

@Injectable()
export class FingerprintApiService {
  constructor(private readonly apiService: ApiService) {}

  saveFonts(payload: FingerprintDto<FingerprintFontsDetected>): Observable<void> {
    return this.apiService.post(FINGERPRINT_API_ROUTES.saveFonts, payload);
  }
}
