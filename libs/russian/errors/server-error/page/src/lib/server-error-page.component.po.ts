import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ServerErrorPageComponent } from './server-error-page.component';

enum ServerErrorPageAutomation {
  Logo = 'logo',
  Title = 'title',
  Status = 'status',
  Hint = 'hint',
  HintNext = 'hint-next',
  Links = 'links',
  App = 'app',
}

export class ServerErrorPageComponentPo extends PageObject<ServerErrorPageComponent> {
  get title(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.Title);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.Logo);
  }

  get status(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.Status);
  }

  get hint(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.Hint);
  }

  get hintNext(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.HintNext);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.Links);
  }

  get app(): DebugElement | null {
    return this.getByAutomationId(ServerErrorPageAutomation.App);
  }
}
