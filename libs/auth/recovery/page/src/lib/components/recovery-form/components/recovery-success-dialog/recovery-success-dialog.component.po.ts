import { PageObject } from '@banx/core/testing';

enum Automation {
  Title = 'title',
  Content = 'content',
  Close = 'close',
}

export class RecoverySuccessDialogComponentPo extends PageObject {
  get titleText(): string | null {
    return this.text(Automation.Title);
  }

  get contentText(): string | null {
    return this.text(Automation.Content);
  }

  get closeText(): string | null {
    return this.text(Automation.Close);
  }
}
