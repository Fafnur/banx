import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { FingerprintFontsDto } from '@banx/fingerprints/common';

export const FINGERPRINT_API_ROUTES = {
  saveFonts: '/data/fonts',
};

@Injectable()
export class FingerprintApiService {
  constructor(private readonly apiService: ApiService) {}

  saveFonts(payload: FingerprintFontsDto): Observable<void> {
    return this.apiService.post(FINGERPRINT_API_ROUTES.saveFonts, payload);
  }
}
