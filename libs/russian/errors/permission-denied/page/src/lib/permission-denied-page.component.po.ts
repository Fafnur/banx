import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { PermissionDeniedPageComponent } from './permission-denied-page.component';

enum PermissionDeniedPageAutomation {
  Logo = 'logo',
  Title = 'title',
  Status = 'status',
  Hint = 'hint',
  Links = 'links',
  App = 'app',
}

export class PermissionDeniedPageComponentPo extends PageObject<PermissionDeniedPageComponent> {
  get title(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.Title);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.Logo);
  }

  get status(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.Status);
  }

  get hint(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.Hint);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.Links);
  }

  get app(): DebugElement | null {
    return this.getByAutomationId(PermissionDeniedPageAutomation.App);
  }
}
