import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';

enum NotFoundPageAutomation {
  Logo = 'logo',
  Title = 'title',
  Status = 'status',
  Hint = 'hint',
  Links = 'links',
  App = 'app',
}

export class NotFoundPageComponentPo extends PageObject<NotFoundPageComponent> {
  get title(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.Title);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.Logo);
  }

  get status(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.Status);
  }

  get hint(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.Hint);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.Links);
  }

  get app(): DebugElement | null {
    return this.getByAutomationId(NotFoundPageAutomation.App);
  }
}
