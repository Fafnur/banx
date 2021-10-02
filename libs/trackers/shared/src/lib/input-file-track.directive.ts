import { Directive, HostListener, Input, Optional } from '@angular/core';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector: '[banxInputFileTrack][trackId]',
})
export class InputFileTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue?: string;

  constructor(@Optional() private readonly trackerFacade: TrackerFacade) {}

  @HostListener('change')
  onAttach(): void {
    this.track(TrackerEventType.Click);
  }

  private track(type: TrackerEventType): void {
    this.trackerFacade?.add({
      type,
      value: this.trackValue ?? 'attach',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
