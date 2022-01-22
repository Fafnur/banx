import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Card = 'card',
  Title = 'title',
  Content = 'content',
  Actions = 'actions',
  Reset = 'reset',
  Continue = 'continue',
}

export class RegistrationRestartPageComponentPo extends PageObject {
  get card(): DebugElement | null {
    return this.getByAutomationId(Automation.Card);
  }

  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get contentText(): string | null {
    return this.text(Automation.Content);
  }

  get actions(): DebugElement | null {
    return this.getByAutomationId(Automation.Actions);
  }

  get reset(): DebugElement | null {
    return this.getByAutomationId(Automation.Reset);
  }

  get continue(): DebugElement | null {
    return this.getByAutomationId(Automation.Continue);
  }
}
