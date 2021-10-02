import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector: '[banxSliderTrack][trackId][formControlName],[banxSliderTrack][trackId][formControl]',
})
export class SliderTrackDirective {
  @Input() trackId!: string;

  constructor(@Optional() private readonly trackerFacade: TrackerFacade, @Optional() @Self() public ngControl: NgControl) {}

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
    this.trackerFacade?.add({
      type,
      value: value ?? this.ngControl?.value?.toString() ?? '',
      time: Date.now(),
      element: this.trackId,
    });
  }
}
