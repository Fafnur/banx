import { PageObject } from '@banx/core/testing';

enum Automation {
  Input = 'input',
}

export class InputTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Input, 'focus');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Input, 'focusout');
  }

  onInput(data?: any): void {
    this.triggerEventHandler(Automation.Input, 'keydown', data);
  }
}
