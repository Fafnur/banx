import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

@Directive({
  selector:
    // eslint-disable-next-line max-len
    '[banxAutocompleteTrack][trackId][formControlName],[banxAutocompleteTrack][trackId][formControl],[banxAutocompleteTrack][trackId][trackValue]',
})
export class AutocompleteTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue?: string;

  constructor(@Optional() private readonly trackerFacade: TrackerFacade, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  @HostListener('focus')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('optionSelected')
  onInput(): void {
    this.track(TrackerEventType.Change);
  }

  @HostListener('closed')
  onClose(): void {
    this.track(TrackerEventType.Close);
  }

  @HostListener('opened')
  onOpen(): void {
    this.track(TrackerEventType.Open);
  }

  private track(type: TrackerEventType): void {
    this.trackerFacade?.add({
      type,
      value: this.trackValue ?? this.ngControl?.value ?? '',
      time: Date.now(),
      element: this.trackId,
    });
  }
}
