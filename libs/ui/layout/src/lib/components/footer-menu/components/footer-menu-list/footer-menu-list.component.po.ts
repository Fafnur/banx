import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Row = 'row',
  Column = 'column',
  Title = 'title',
  Nav = 'nav',
  Link = 'link',
}

export class FooterMenuListComponentPo extends PageObject {
  get row(): DebugElement | null {
    return this.getByAutomationId(Automation.Row);
  }

  get column(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Column);
  }

  get title(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Title);
  }

  get nav(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Nav);
  }

  get link(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Link);
  }
}
