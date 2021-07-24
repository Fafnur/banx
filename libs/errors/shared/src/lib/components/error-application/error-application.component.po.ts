import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ErrorApplicationComponent } from './error-application.component';

enum ErrorApplicationAutomation {
  Container = 'container',
  Preview = 'preview',
  Title = 'title',
  Hint = 'hint',
  Code = 'code',
  Links = 'links',
  AppStore = 'app-store',
  GooglePlay = 'google-play',
  Download = 'download',
}

export class ErrorApplicationComponentPo extends PageObject<ErrorApplicationComponent> {
  get container(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Container);
  }

  get preview(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Preview);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Title);
  }

  get hint(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Hint);
  }

  get code(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Code);
  }

  get links(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Links);
  }

  get appStore(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.AppStore);
  }

  get googlePlay(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.GooglePlay);
  }

  get download(): DebugElement | null {
    return this.getByAutomationId(ErrorApplicationAutomation.Download);
  }
}
