import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Link = 'link',
  Name = 'name',
  Icon = 'icon',
}

export class LocaleSwitcherComponentPo extends PageObject {
  get link(): DebugElement | null {
    return this.getByAutomationId(Automation.Link);
  }

  get name(): string | null {
    return this.text(Automation.Name);
  }

  get icon(): DebugElement | null {
    return this.getByAutomationId(Automation.Icon);
  }
}
