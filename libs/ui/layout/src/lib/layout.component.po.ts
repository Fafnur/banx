import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';
import { LayoutComponent } from '@banx/russian/ui/layout';

enum HeaderAutomation {
  Header = 'header',
  Main = 'main',
  Footer = 'footer',
}

export class LayoutComponentPo extends PageObject<LayoutComponent> {
  get header(): DebugElement | null {
    return this.getByAutomationId(HeaderAutomation.Header);
  }

  get main(): DebugElement | null {
    return this.getByAutomationId(HeaderAutomation.Main);
  }

  get footer(): DebugElement | null {
    return this.getByAutomationId(HeaderAutomation.Footer);
  }
}
