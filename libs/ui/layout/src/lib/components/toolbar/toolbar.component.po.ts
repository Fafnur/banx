import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Container = 'container',
  SideMenu = 'side-menu',
  Brand = 'brand',
  MainMenu = 'main-menu',
  Auth = 'auth',
}

export class ToolbarComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get sideMenu(): DebugElement | null {
    return this.getByAutomationId(Automation.SideMenu);
  }

  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get mainMenu(): DebugElement | null {
    return this.getByAutomationId(Automation.MainMenu);
  }

  get auth(): DebugElement | null {
    return this.getByAutomationId(Automation.Auth);
  }
}
