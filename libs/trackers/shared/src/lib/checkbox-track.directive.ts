import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector: '[banxCheckboxTrack][trackId][formControlName],[banxCheckboxTrack][trackId][formControl]',
})
export class CheckboxTrackDirective {
  @Input() trackId!: string;

  constructor(@Optional() private readonly trackerFacade: TrackerFacade, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  @HostListener('focusin')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('change', ['$event'])
  onInput(event: MatCheckboxChange): void {
    this.track(TrackerEventType.Change, event.checked ? '1' : '0');
  }

  private track(type: TrackerEventType, value?: string): void {
    this.trackerFacade?.add({
      type,
      value: value ?? (this.ngControl?.value ? '1' : '0') ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
