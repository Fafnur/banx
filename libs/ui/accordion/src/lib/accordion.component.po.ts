import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Accordion = 'accordion',
  Item = 'item',
}

export class AccordionComponentPo extends PageObject {
  get accordion(): DebugElement | null {
    return this.getByAutomationId(Automation.Accordion);
  }

  get items(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Item);
  }
}
