import { PageObject } from '@banx/core/testing';

enum Automation {
  Radio = 'radio-yes',
}

export class RadioTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Radio, 'focusin');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Radio, 'focusout');
  }

  onChange(): void {
    this.triggerEventHandler(Automation.Radio, 'change', { value: '1' });
  }
}
