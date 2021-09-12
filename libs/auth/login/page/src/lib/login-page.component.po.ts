import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

enum Automation {
  Card = 'card',
  Title = 'title',
  Subtitle = 'subtitle',
  Form = 'form',
  Links = 'links',
  Hint = 'hint',
  Social = 'social',
  Recovery = 'recovery',
  SignUp = 'signup',
}

export class LoginPageComponentPo extends PageObject {
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

  get social(): DebugElement | null {
    return this.getByAutomationId(Automation.Social);
  }

  get recovery(): string | null {
    return this.text(Automation.Recovery);
  }

  get signUp(): string | null {
    return this.text(Automation.SignUp);
  }
}
