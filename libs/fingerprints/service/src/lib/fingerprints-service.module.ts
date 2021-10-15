import { NgModule } from '@angular/core';

import { CanvasDetectorService } from './canvas-detector.service';
import { FontDetectorService } from './font-detector.service';

@NgModule({
  providers: [FontDetectorService, CanvasDetectorService],
})
export class FingerprintsServiceModule {}
