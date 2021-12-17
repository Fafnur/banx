import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Label = 'label',
  Select = 'select',
  FormField = 'form-field',
  Form = 'form',
}

export class RegistrationAdditionalContactTypeComponentPo extends PageObject {
  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get idText(): string | null {
    return this.getByAutomationId(Automation.Select)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }

  get hasInputTrackAttr(): boolean {
    return this.getByAutomationId(Automation.Select)?.attributes?.banxSelectTrack != null ?? false;
  }
}
