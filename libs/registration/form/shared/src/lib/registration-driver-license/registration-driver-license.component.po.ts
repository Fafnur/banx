import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Label = 'label',
  RadioGroup = 'radio-group',
  FormField = 'form-field',
  Form = 'form',
  RadioYes = 'radio-yes',
  RadioNo = 'radio-no',
}

export class RegistrationDriverLicenseComponentPo extends PageObject {
  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get radioGroup(): DebugElement | null {
    return this.getByAutomationId(Automation.RadioGroup);
  }

  get idYesText(): string | null {
    return this.getByAutomationId(Automation.RadioYes)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get idNoText(): string | null {
    return this.getByAutomationId(Automation.RadioNo)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }

  get hasYesTrackAttr(): boolean {
    return this.getByAutomationId(Automation.RadioYes)?.attributes?.banxRadioTrack != null ?? false;
  }

  get hasNoTrackAttr(): boolean {
    return this.getByAutomationId(Automation.RadioNo)?.attributes?.banxRadioTrack != null ?? false;
  }
}
