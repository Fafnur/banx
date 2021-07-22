import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { GridBreakpointName } from '../grid.util';
import { WrapperComponent } from './row.component.spec';

enum RowAutomation {
  Row = 'row',
}

export class RowComponentPo extends PageObject<WrapperComponent> {
  get row(): DebugElement | null {
    return this.getByAutomationId(RowAutomation.Row);
  }

  hasRowClass(className: string): boolean {
    return this.row?.classes[className] ?? false;
  }

  setMode(mode: string | GridBreakpointName): void {
    if (this.row?.componentInstance) {
      this.row.componentInstance.mode = mode;
    }
  }
}
