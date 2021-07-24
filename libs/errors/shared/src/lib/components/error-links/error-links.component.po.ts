import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ErrorLinksComponent } from './error-links.component';

enum ErrorLinksAutomation {
  Links = 'links',
  CreditCard = 'credit-card',
  DebitCard = 'debit-card',
  Deposit = 'deposit',
  Brand = 'brand',
}

export class ErrorLinksComponentPo extends PageObject<ErrorLinksComponent> {
  get links(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.Links);
  }

  get creditCard(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.CreditCard);
  }

  get creditCardText(): string | null {
    return this.text(ErrorLinksAutomation.CreditCard);
  }

  get creditCardLink(): string | null {
    return this.creditCard?.attributes['href'] ?? '';
  }

  get debitCard(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.DebitCard);
  }

  get debitCardText(): string | null {
    return this.text(ErrorLinksAutomation.DebitCard);
  }

  get deposit(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.Deposit);
  }

  get depositText(): string | null {
    return this.text(ErrorLinksAutomation.Deposit);
  }

  get brand(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.Brand);
  }

  get brandText(): string | null {
    return this.text(ErrorLinksAutomation.Brand);
  }
}
