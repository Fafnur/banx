import { Directive, HostListener, Input, Optional } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

@Directive({
  selector: '[banxRadioTrack][trackId][trackValue]',
})
export class RadioTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue!: string;

  constructor(@Optional() private readonly trackerService: TrackerService) {}

  @HostListener('focusin')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  @HostListener('change', ['$event'])
  onChanged(event: MatRadioChange): void {
    this.track(TrackerEventType.Change, event.value);
  }

  private track(type: TrackerEventType, value?: string): void {
    this.trackerService.add({
      type,
      value: value ?? this.trackValue ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
