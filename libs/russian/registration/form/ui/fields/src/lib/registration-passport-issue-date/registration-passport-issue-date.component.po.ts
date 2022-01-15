import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Input = 'input',
  InputHidden = 'input-hidden',
  Label = 'label',
  Form = 'form',
  FormField = 'form-field',
  Datepicker = 'datepicker',
}

export class RegistrationPassportIssueDateComponentPo extends PageObject {
  get formField(): DebugElement | null {
    return this.getByAutomationId(Automation.FormField);
  }

  get labelText(): string | null {
    return this.text(Automation.Label);
  }

  get idText(): string | null {
    return this.getByAutomationId(Automation.Input)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get idHiddenText(): string | null {
    return this.getByAutomationId(Automation.InputHidden)?.attributes['ng-reflect-track-id'] ?? null;
  }
  get idDatepickerText(): string | null {
    return this.getByAutomationId(Automation.Datepicker)?.attributes['ng-reflect-track-id'] ?? null;
  }

  get control(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.control ?? null;
  }

  get maskControl(): FormControl | null {
    return this.getByAutomationId(Automation.Form)?.componentInstance.maskControl ?? null;
  }

  get hasInputTrackAttr(): boolean {
    return this.getByAutomationId(Automation.Input)?.attributes?.banxInputTrack != null ?? false;
  }

  get hasHiddenInputTrackAttr(): boolean {
    return this.getByAutomationId(Automation.InputHidden)?.attributes?.banxDatepickerTrack != null ?? false;
  }

  get hasDatepickerTrackAttr(): boolean {
    return this.getByAutomationId(Automation.Datepicker)?.attributes?.banxDatepickerTrack != null ?? false;
  }

  patchControlValue(value: string): void {
    this.fixture.componentInstance.control?.patchValue(value);
  }

  patchMaskControlValue(value: string): void {
    this.getByAutomationId(Automation.Form)?.componentInstance.maskControl?.patchValue(value);
  }
}
