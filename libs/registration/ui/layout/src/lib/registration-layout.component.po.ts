import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Desktop = 'desktop',
  Mobile = 'mobile',
}

export class RegistrationLayoutComponentPo extends PageObject {
  get desktop(): DebugElement | null {
    return this.getByAutomationId(Automation.Desktop);
  }

  get mobile(): DebugElement | null {
    return this.getByAutomationId(Automation.Mobile);
  }
}
