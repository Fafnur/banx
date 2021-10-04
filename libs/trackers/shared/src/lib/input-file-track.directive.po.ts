import { PageObject } from '@banx/core/testing';

enum Automation {
  Input = 'input-file',
}

export class InputFileTrackDirectivePo extends PageObject {
  onChange(): void {
    this.triggerEventHandler(Automation.Input, 'change');
  }
}
