import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Card = 'card',
  Title = 'title',
  Content = 'content',
  Error = 'error',
  Actions = 'actions',
  Submit = 'submit',
  Spinner = 'spinner',
}

export class RegistrationConversionComponentPo extends PageObject {
  get card(): DebugElement | null {
    return this.getByAutomationId(Automation.Card);
  }

  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get contentText(): string | null {
    return this.text(Automation.Content);
  }

  get error(): DebugElement | null {
    return this.getByAutomationId(Automation.Error);
  }

  get actions(): DebugElement | null {
    return this.getByAutomationId(Automation.Actions);
  }

  get submit(): DebugElement | null {
    return this.getByAutomationId(Automation.Submit);
  }

  get spinner(): DebugElement | null {
    return this.getByAutomationId(Automation.Spinner);
  }
}
