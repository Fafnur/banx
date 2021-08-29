import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Nav = 'nav',
  Home = 'home',
}

export class MainMenuComponentPo extends PageObject {
  get nav(): DebugElement | null {
    return this.getByAutomationId(Automation.Nav);
  }

  get home(): DebugElement | null {
    return this.getByAutomationId(Automation.Home);
  }
}
