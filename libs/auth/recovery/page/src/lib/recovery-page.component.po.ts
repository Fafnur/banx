import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Card = 'card',
  Title = 'title',
  Subtitle = 'subtitle',
  Form = 'form',
  Links = 'links',
  Hint = 'hint',
  Login = 'login',
  SignUp = 'signup',
}

export class RecoveryPageComponentPo extends PageObject {
  get card(): DebugElement | null {
    return this.getByAutomationId(Automation.Card);
  }

  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get subtitleText(): string | null {
    return this.text(Automation.Subtitle);
  }

  get form(): DebugElement | null {
    return this.getByAutomationId(Automation.Form);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(Automation.Links);
  }

  get hint(): DebugElement | null {
    return this.getByAutomationId(Automation.Hint);
  }

  get login(): string | null {
    return this.text(Automation.Login);
  }

  get signUp(): string | null {
    return this.text(Automation.SignUp);
  }
}
