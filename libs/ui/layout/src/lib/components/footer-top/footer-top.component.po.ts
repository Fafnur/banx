import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Container = 'container',
  Brand = 'brand',
  Company = 'company',
  Phone = 'phone',
  MobilePhone = 'mobile-phone',
  SocialGroups = 'social-groups',
}

export class FooterTopComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get phone(): DebugElement | null {
    return this.getByAutomationId(Automation.Phone);
  }

  get company(): DebugElement | null {
    return this.getByAutomationId(Automation.Company);
  }

  get mobilePhone(): DebugElement | null {
    return this.getByAutomationId(Automation.MobilePhone);
  }

  get socialGroups(): DebugElement | null {
    return this.getByAutomationId(Automation.SocialGroups);
  }
}
