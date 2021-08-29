import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Nav = 'nav',
  Link = 'link',
  Label = 'label',
}

export class NavComponentPo extends PageObject {
  get nav(): DebugElement | null {
    return this.getByAutomationId(Automation.Nav);
  }

  get links(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Link);
  }

  get labels(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Label);
  }
}
