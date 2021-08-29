import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Groups = 'groups',
  Group = 'group',
}

export class SocialGroupsComponentPo extends PageObject {
  get groups(): DebugElement | null {
    return this.getByAutomationId(Automation.Groups);
  }

  get groupAll(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Group);
  }
}
