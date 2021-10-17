import { NgModule } from '@angular/core';

import { CanvasDetectorService } from './canvas-detector.service';
import { FontDetectorService } from './font-detector.service';
import { GeolocationDetectorService } from './geolocation-detector.service';

@NgModule({
  providers: [FontDetectorService, CanvasDetectorService, GeolocationDetectorService],
})
export class FingerprintsServiceModule {}
