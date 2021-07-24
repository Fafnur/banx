import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { ErrorStatusColor } from './error-status.component';
import { WrapperComponent } from './error-status.component.spec';

enum ErrorStatusAutomation {
  Status = 'status',
}

export class ErrorStatusComponentPo extends PageObject<WrapperComponent> {
  get status(): DebugElement | null {
    return this.getByAutomationId(ErrorStatusAutomation.Status);
  }

  hasColor(className: string): boolean {
    return this.status?.classes[className] ?? false;
  }

  setColor(color: ErrorStatusColor): void {
    if (this.fixture?.componentInstance) {
      this.fixture.componentInstance.color = color;
    }
  }
}
