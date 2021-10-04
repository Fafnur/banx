import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutocompleteTrackDirective } from './autocomplete-track.directive';
import { ButtonTrackDirective } from './button-track.directive';
import { CheckboxTrackDirective } from './checkbox-track.directive';
import { DatepickerTrackDirective } from './datepicker-track.directive';
import { InputFileTrackDirective } from './input-file-track.directive';
import { InputTrackDirective } from './input-track.directive';
import { RadioTrackDirective } from './radio-track.directive';
import { SelectTrackDirective } from './select-track.directive';
import { SliderTrackDirective } from './slider-track.directive';

const directives = [
  InputTrackDirective,
  ButtonTrackDirective,
  DatepickerTrackDirective,
  AutocompleteTrackDirective,
  CheckboxTrackDirective,
  InputFileTrackDirective,
  RadioTrackDirective,
  SliderTrackDirective,
  SelectTrackDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...directives],
  exports: [...directives],
})
export class TrackersSharedModule {}
