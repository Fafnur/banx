import { PageObject } from '@banx/core/testing';

enum Automation {
  Select = 'select',
}

export class SelectTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Select, 'focus');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Select, 'focusout');
  }

  onClosed(): void {
    this.triggerEventHandler(Automation.Select, 'closed');
  }

  onOpened(): void {
    this.triggerEventHandler(Automation.Select, 'opened');
  }

  onSelectionChange(): void {
    this.triggerEventHandler(Automation.Select, 'selectionChange');
  }
}
