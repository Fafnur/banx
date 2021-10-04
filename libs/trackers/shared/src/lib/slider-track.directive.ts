import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

@Directive({
  selector: '[banxSliderTrack][trackId][formControlName],[banxSliderTrack][trackId][formControl]',
})
export class SliderTrackDirective {
  @Input() trackId!: string;

  constructor(@Optional() private readonly trackerService: TrackerService, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('input')
  onInput(): void {
    this.track(TrackerEventType.Change, this.ngControl?.value?.toString());
  }

  @HostListener('focus')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  private track(type: TrackerEventType, value?: string): void {
    this.trackerService.add({
      type,
      value: value ?? this.ngControl?.value?.toString() ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
