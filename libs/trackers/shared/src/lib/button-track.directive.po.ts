import { PageObject } from '@banx/core/testing';

enum Automation {
  Button = 'button',
}

export class ButtonTrackDirectivePo extends PageObject {
  onClick(): void {
    this.triggerEventHandler(Automation.Button, 'click');
  }
}
