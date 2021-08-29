import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Container = 'container',
  Copyright = 'copyright',
  SocialGroups = 'social-groups',
  LocaleSwitcher = 'locale-switcher',
}

export class FooterBottomComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get copyright(): DebugElement | null {
    return this.getByAutomationId(Automation.Copyright);
  }

  get socialGroups(): DebugElement | null {
    return this.getByAutomationId(Automation.SocialGroups);
  }

  get localeSwitcher(): DebugElement | null {
    return this.getByAutomationId(Automation.LocaleSwitcher);
  }
}
