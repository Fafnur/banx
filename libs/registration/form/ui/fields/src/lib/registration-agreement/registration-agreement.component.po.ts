import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Checkbox = 'checkbox',
  Form = 'form',
}

export class RegistrationAgreementComponentPo extends PageObject {
  get checkbox(): DebugElement | null {
    return this.getByAutomationId(Automation.Checkbox);
  }

  get checkboxText(): string | null {
    return this.text(Automation.Checkbox);
  }

  get idText(): string | null {
    return this.checkbox?.attributes['ng-reflect-track-id'] ?? null;
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }

  get hasInputTrackAttr(): boolean {
    return this.getByAutomationId<any>(Automation.Checkbox)?.attributes['banxCheckboxTrack'] != null ?? false;
  }
}
