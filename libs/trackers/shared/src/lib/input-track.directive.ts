import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

const SHIFT_CTRL_ALT_CODES: string[] = ['Control', 'Shift', 'Alt'];
const SPECIAL_CODES: string[] = [
  'Down',
  'ArrowDown',
  'Up',
  'ArrowUp',
  'Left',
  'ArrowLeft',
  'Right',
  'ArrowRight',
  'Enter',
  'Esc',
  'Tab',
  'CapsLock',
  'Backspace',
  'End',
  'Home',
  'Delete',
  'PageUp',
  'PageDown',
];

export function isSpecialKeys(event: KeyboardEvent): boolean {
  return event != null && !!event.key && SPECIAL_CODES.includes(event.key);
}

export function extractKeysFromKeyboardEvent(event: KeyboardEvent, hideValue?: boolean): string {
  if (SHIFT_CTRL_ALT_CODES.includes(event?.key)) {
    return '';
  }

  const keys: string[] = [];
  if (event.altKey || event.ctrlKey || event.shiftKey) {
    keys.push(event.key);
  }
  if (!hideValue) {
    keys.push(event.key);
  }

  return keys.join(',');
}

@Directive({
  selector: '[banxInputTrack][trackId][formControlName],[banxInputTrack][trackId][formControl]',
})
export class InputTrackDirective {
  @Input() trackId!: string;
  @Input() trackValue!: string;
  @Input() hideValue?: boolean;

  constructor(@Optional() private readonly trackerService: TrackerService, @Optional() @Self() public ngControl: NgControl) {}

  @HostListener('focusout')
  onBlur(): void {
    this.track(TrackerEventType.Blur);
  }

  @HostListener('focus')
  onFocus(): void {
    this.track(TrackerEventType.Focus);
  }

  @HostListener('keydown', ['$event'])
  onInput(event: KeyboardEvent): void {
    if (isSpecialKeys(event)) {
      this.track(TrackerEventType.Press, extractKeysFromKeyboardEvent(event, this.hideValue));
    } else {
      this.track(TrackerEventType.Change, extractKeysFromKeyboardEvent(event, this.hideValue));
    }
  }

  private track(type: TrackerEventType, keys?: string): void {
    this.trackerService.add({
      type,
      keys,
      value: this.hideValue ? '' : this.trackValue ?? this.ngControl?.value ?? '',
      time: new Date().toISOString(),
      element: this.trackId,
    });
  }
}
