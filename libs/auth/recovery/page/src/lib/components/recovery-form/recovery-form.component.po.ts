import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Form = 'form',
  Phone = 'phone',
  Birthdate = 'birthdate',
  Error = 'error',
  Reset = 'reset',
}

export class RecoveryFormComponentPo extends PageObject {
  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }

  get birthdate(): DebugElement | null {
    return this.getByAutomationId(Automation.Birthdate);
  }

  get error(): DebugElement | null {
    return this.getByAutomationId(Automation.Error);
  }

  get reset(): DebugElement | null {
    return this.getByAutomationId(Automation.Reset);
  }

  get resetText(): string | null {
    return this.text(Automation.Reset);
  }

  setForm(value: Record<string, any>): void {
    this.fixture.componentInstance.form.patchValue(value);
  }

  triggerResetClick(): void {
    this.triggerEventHandler(this.reset, 'click');
  }
}
