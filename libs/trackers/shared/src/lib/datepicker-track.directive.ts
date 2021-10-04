import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

@Directive({
  selector:
    // eslint-disable-next-line max-len
    '[banxDatepickerTrack][trackId][formControlName],[banxDatepickerTrack][trackId][formControl],[banxDatepickerTrack][trackId][trackValue]',
})
export class DatepickerTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue?: string;

  constructor(@Optional() private readonly trackerService: TrackerService, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('dateChange')
  onSelected(): void {
    this.track(TrackerEventType.Change);
  }

  @HostListener('opened')
  onOpened(): void {
    this.track(TrackerEventType.Open);
  }

  @HostListener('closed')
  onClosed(): void {
    this.track(TrackerEventType.Close);
  }

  private track(type: TrackerEventType): void {
    this.trackerService.add({
      type,
      value: this.trackValue ? this.trackValue : this.ngControl?.value ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
