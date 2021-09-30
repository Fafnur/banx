import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { TrackerRecordsDto } from '@banx/trackers/common';

export const TRACKER_API_ROUTES = {
  save: '/trackers/records',
};

@Injectable()
export class TrackerApiService {
  constructor(private readonly apiService: ApiService) {}

  save(payload: TrackerRecordsDto): Observable<void> {
    return this.apiService.post(TRACKER_API_ROUTES.save, payload);
  }
}
