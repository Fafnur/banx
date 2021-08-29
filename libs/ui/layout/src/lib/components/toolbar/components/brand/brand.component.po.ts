import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Link = 'link',
  Logo = 'logo',
}

export class BrandComponentPo extends PageObject {
  get link(): DebugElement | null {
    return this.getByAutomationId(Automation.Link);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }
}
