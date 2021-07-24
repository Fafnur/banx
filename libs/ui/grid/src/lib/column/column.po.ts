import { DebugElement } from '@angular/core';

import { PageObject } from '@banx/core/testing';

import { GridBreakpointName } from '../grid.util';
import { WrapperComponent } from './column.component.spec';

enum ColumnAutomation {
  Column = 'column',
}

export class ColumnComponentPo extends PageObject<WrapperComponent> {
  get column(): DebugElement | null {
    return this.getByAutomationId(ColumnAutomation.Column);
  }

  hasColumnClass(className: string): boolean {
    return this.column?.classes[className] ?? false;
  }

  setMode(mode: string | GridBreakpointName): void {
    if (this.column?.componentInstance) {
      this.column.componentInstance.mode = mode;
    }
  }
}
