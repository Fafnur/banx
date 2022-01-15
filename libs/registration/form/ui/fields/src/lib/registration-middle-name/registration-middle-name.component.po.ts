import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Label = 'label',
  Input = 'input',
  FormField = 'form-field',
  Form = 'form',
}

export class RegistrationMiddleNameComponentPo extends PageObject {
  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get idText(): string | null {
    return this.getByAutomationId(Automation.Input)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }

  get hasInputTrackAttr(): boolean {
    return this.getByAutomationId<any>(Automation.Input)?.attributes['banxInputTrack'] != null ?? false;
  }
}
