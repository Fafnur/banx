import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { LayoutComponent } from './layout.component';

enum Automation {
  Header = 'header',
  Main = 'main',
  Footer = 'footer',
}

export class LayoutComponentPo extends PageObject<LayoutComponent> {
  get header(): DebugElement | null {
    return this.getByAutomationId(Automation.Header);
  }

  get main(): DebugElement | null {
    return this.getByAutomationId(Automation.Main);
  }

  get footer(): DebugElement | null {
    return this.getByAutomationId(Automation.Footer);
  }
}
