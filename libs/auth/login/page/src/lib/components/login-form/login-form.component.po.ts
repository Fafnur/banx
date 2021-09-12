import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Form = 'form',
  Username = 'username',
  Password = 'password',
  Error = 'error',
  Login = 'login',
}

export class LoginFormComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get username(): DebugElement | null {
    return this.getByAutomationId(Automation.Username);
  }

  get password(): DebugElement | null {
    return this.getByAutomationId(Automation.Password);
  }

  get error(): DebugElement | null {
    return this.getByAutomationId(Automation.Error);
  }

  get login(): DebugElement | null {
    return this.getByAutomationId(Automation.Login);
  }

  get loginText(): string | null {
    return this.text(Automation.Login);
  }

  setForm(value: Record<string, any>): void {
    this.fixture.componentInstance.form.patchValue(value);
  }

  triggerLoginClick(): void {
    this.triggerEventHandler(this.login, 'click');
  }
}
