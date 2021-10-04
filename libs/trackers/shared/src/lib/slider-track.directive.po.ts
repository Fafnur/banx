import { PageObject } from '@banx/core/testing';

enum Automation {
  Slider = 'slider',
}

export class SliderTrackDirectivePo extends PageObject {
  onFocus(): void {
    this.triggerEventHandler(Automation.Slider, 'focus');
  }

  onBlur(): void {
    this.triggerEventHandler(Automation.Slider, 'focusout');
  }

  onInput(): void {
    this.triggerEventHandler(Automation.Slider, 'input');
  }
}
