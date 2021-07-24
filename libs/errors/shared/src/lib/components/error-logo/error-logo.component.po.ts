import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ErrorLogoComponent } from './error-logo.component';

enum ErrorLogoAutomation {
  Link = 'link',
}

export class ErrorLogoComponentPo extends PageObject<ErrorLogoComponent> {
  get link(): DebugElement | null {
    return this.getByAutomationId(ErrorLogoAutomation.Link);
  }

  get linkText(): string | null {
    return this.text(ErrorLogoAutomation.Link);
  }

  get linkHref(): string | null {
    return this.link?.attributes['href'] ?? '';
  }
}
