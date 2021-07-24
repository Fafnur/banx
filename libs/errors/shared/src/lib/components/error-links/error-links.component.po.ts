import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ErrorLinksComponent } from './error-links.component';

enum ErrorLinksAutomation {
  Links = 'links',
  CreditCard = 'credit-card',
  DebitCard = 'debit-card',
  Deposit = 'deposit',
  Home = 'home',
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

  get debitCardLink(): string | null {
    return this.debitCard?.attributes['href'] ?? '';
  }

  get deposit(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.Deposit);
  }

  get depositText(): string | null {
    return this.text(ErrorLinksAutomation.Deposit);
  }

  get depositLink(): string | null {
    return this.deposit?.attributes['href'] ?? '';
  }

  get home(): DebugElement | null {
    return this.getByAutomationId(ErrorLinksAutomation.Home);
  }
}
