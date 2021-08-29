import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Container = 'container',
  Nav = 'nav',
}

export class TopMenuComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get nav(): DebugElement | null {
    return this.getByAutomationId(Automation.Nav);
  }
}
