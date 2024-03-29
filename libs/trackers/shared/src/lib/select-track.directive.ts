import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

@Directive({
  selector: '[banxSelectTrack][trackId][formControlName],[banxSelectTrack][trackId][formControl]',
})
export class SelectTrackDirective {
  @Input() trackId!: string;

  constructor(@Optional() private readonly trackerService: TrackerService, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('focus')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('selectionChange')
  onInput(): void {
    this.track(TrackerEventType.Change);
  }

  @HostListener('opened')
  onOpen(): void {
    this.track(TrackerEventType.Open);
  }

  @HostListener('closed')
  onClose(): void {
    this.track(TrackerEventType.Close);
  }

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  private track(type: TrackerEventType): void {
    this.trackerService.add({
      type,
      value: this.ngControl?.value ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
