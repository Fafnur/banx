import { PageObject } from '@banx/core/testing';

enum Automation {
  Datepicker = 'datepicker',
}

export class DatepickerTrackDirectivePo extends PageObject {
  onOpened(): void {
    this.triggerEventHandler(Automation.Datepicker, 'opened');
  }

  onClosed(): void {
    this.triggerEventHandler(Automation.Datepicker, 'closed');
  }

  onDateChange(): void {
    this.triggerEventHandler(Automation.Datepicker, 'dateChange');
  }
}
