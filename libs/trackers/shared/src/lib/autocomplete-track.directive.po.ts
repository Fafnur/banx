import { PageObject } from '@banx/core/testing';

enum Automation {
  Input = 'input',
  Autocomplete = 'autocomplete',
}

export class AutocompleteTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Input, 'focus');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Input, 'focusout');
  }

  onClosed(): void {
    this.triggerEventHandler(Automation.Autocomplete, 'closed');
  }

  onOpen(): void {
    this.triggerEventHandler(Automation.Autocomplete, 'opened');
  }

  onOptionSelected(): void {
    this.triggerEventHandler(Automation.Autocomplete, 'optionSelected');
  }
}
