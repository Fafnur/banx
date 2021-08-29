import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Brand = 'brand',
  Linl = 'link',
}

export class FooterCompanyComponentPo extends PageObject {
  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get link(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Linl);
  }
}
