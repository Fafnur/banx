import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Label = 'label',
  Control = 'control',
}

export class RecoveryFormPhoneComponentPo extends PageObject {
  get label(): string | null {
    return this.text(Automation.Label);
  }

  get control(): DebugElement | null {
    return this.getByAutomationId(Automation.Control);
  }
}
