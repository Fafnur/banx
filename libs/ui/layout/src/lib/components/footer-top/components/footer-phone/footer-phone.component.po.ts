import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Phone = 'phone',
  Hint = 'hint',
}

export class FooterPhoneComponentPo extends PageObject {
  get hint(): DebugElement | null {
    return this.getByAutomationId(Automation.Hint);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }
}
