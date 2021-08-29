import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Login = 'login',
  Label = 'label',
  Icon = 'icon',
}

export class LoginComponentPo extends PageObject {
  get login(): DebugElement | null {
    return this.getByAutomationId(Automation.Login);
  }

  get label(): string | null {
    return this.text(Automation.Label);
  }

  get icon(): string | null {
    return this.text(Automation.Icon);
  }
}
