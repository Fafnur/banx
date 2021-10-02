import { Directive, HostListener, Input, Optional } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector: '[banxRadioTrack][trackId][trackValue]',
})
export class RadioTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue!: string;

  constructor(@Optional() private readonly trackerFacade: TrackerFacade) {}

  @HostListener('change', ['$event'])
  onChange(event: MatRadioChange): void {
    this.track(TrackerEventType.Change, event.value);
  }

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  @HostListener('focusin')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  private track(type: TrackerEventType, value?: string): void {
    this.trackerFacade?.add({
      type,
      value: value ?? this.trackValue ?? '',
      time: Date.now(),
      element: this.trackId,
    });
  }
}
