import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Login = 'login',
  User = 'user',
}

export class AuthComponentPo extends PageObject {
  get login(): DebugElement | null {
    return this.getByAutomationId(Automation.Login);
  }

  get user(): DebugElement | null {
    return this.getByAutomationId(Automation.User);
  }

  triggerLogout(): void {
    this.triggerEventHandler(this.user, 'logout');
  }
}
