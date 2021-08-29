import { PageObject } from '@banx/core/testing';

enum Automation {
  Copyright = 'copyright',
}

export class CopyrightComponentPo extends PageObject {
  get copyright(): string | null {
    return this.text(Automation.Copyright);
  }
}
