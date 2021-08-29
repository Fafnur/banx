import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Toggle = 'toggle',
  Sidenav = 'sidenav',
  Close = 'close',
  Accordion = 'accordion',
  SidenavBackdrop = 'sidenav-backdrop',
}

export class SideMenuComponentPo extends PageObject {
  get toggle(): DebugElement | null {
    return this.getByAutomationId(Automation.Toggle);
  }

  get sidenav(): DebugElement | null {
    return this.getByAutomationId(Automation.Sidenav);
  }

  get close(): DebugElement | null {
    return this.getByAutomationId(Automation.Close);
  }

  get accordion(): DebugElement | null {
    return this.getByAutomationId(Automation.Accordion);
  }

  get sidenavBackdrop(): DebugElement | null {
    return this.getByAutomationId(Automation.SidenavBackdrop);
  }
}
