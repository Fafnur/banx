import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

import { TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

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

export function extractKeysFromKeyboardEvent(event: KeyboardEvent): string {
  if (SHIFT_CTRL_ALT_CODES.includes(event?.key)) {
    return '';
  }

  const keys: string[] = [];
  if (event.altKey || event.ctrlKey || event.shiftKey) {
    keys.push(event.key);
  }
  keys.push(event.key);

  return keys.join(',');
}

@Directive({
  selector: '[banxInputTrack][trackId][formControlName],[banxInputTrack][trackId][formControl]',
})
export class InputTrackDirective {
  @Input() trackId!: string;

  constructor(@Optional() private readonly trackerLiteFacade: TrackerFacade, @Optional() @Self() public ngControl: NgControl) {}

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
      this.track(TrackerEventType.Press, extractKeysFromKeyboardEvent(event));
    } else {
      this.track(TrackerEventType.Change, extractKeysFromKeyboardEvent(event));
    }
  }

  private track(type: TrackerEventType, keys?: string): void {
    this.trackerLiteFacade?.add({
      type,
      keys,
      value: this.ngControl?.value ?? '',
      time: Date.now(),
      element: this.trackId,
    });
  }
}
