import { PageObject } from '@banx/core/testing';

enum Automation {
  Checkbox = 'checkbox',
}

export class CheckboxTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Checkbox, 'focusin');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Checkbox, 'focusout');
  }

  onChange(): void {
    this.triggerEventHandler(Automation.Checkbox, 'change', { checked: '1' });
  }
}
