import { Directive, HostListener, Input, Optional } from '@angular/core';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

@Directive({
  selector: '[banxInputFileTrack][trackId]',
})
export class InputFileTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue?: string;

  constructor(@Optional() private readonly trackerService: TrackerService) {}

  @HostListener('change')
  onAttach(): void {
    this.track(TrackerEventType.Click);
  }

  private track(type: TrackerEventType): void {
    this.trackerService.add({
      type,
      value: this.trackValue ?? 'attach',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
