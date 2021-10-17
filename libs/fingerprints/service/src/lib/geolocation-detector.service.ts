import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { WindowService } from '@banx/core/window/service';

@Injectable()
export class GeolocationDetectorService {
  private readonly subject = new ReplaySubject<GeolocationCoordinates | null>(1);

  constructor(private readonly windowService: WindowService) {}

  detect(): Observable<GeolocationCoordinates | null> {
    this.windowService.window?.navigator.geolocation.getCurrentPosition(
      (result) => this.subject.next(result.coords),
      () => this.subject.next(null)
    );

    return this.subject.asObservable();
  }
}
