import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Login = 'login',
  Registration = 'registration',
  Label = 'label',
  RegistrationLabel = 'registration-label',
  Icon = 'icon',
}

export class LoginComponentPo extends PageObject {
  get login(): DebugElement | null {
    return this.getByAutomationId(Automation.Login);
  }

  get registration(): DebugElement | null {
    return this.getByAutomationId(Automation.Registration);
  }

  get label(): string | null {
    return this.text(Automation.Label);
  }

  get registrationLabel(): string | null {
    return this.text(Automation.RegistrationLabel);
  }

  get icon(): string | null {
    return this.text(Automation.Icon);
  }
}
