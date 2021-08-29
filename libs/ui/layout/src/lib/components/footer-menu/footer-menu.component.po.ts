import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Container = 'container',
  List = 'list',
  Accordion = 'accordion',
}

export class FooterMenuComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get list(): DebugElement | null {
    return this.getByAutomationId(Automation.List);
  }

  get accordion(): DebugElement | null {
    return this.getByAutomationId(Automation.Accordion);
  }
}
