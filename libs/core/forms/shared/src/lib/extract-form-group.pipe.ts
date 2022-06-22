import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'extractFormGroup',
})
export class ExtractFormGroupPipe implements PipeTransform {
  transform(formGroup: UntypedFormGroup, controlName: string): UntypedFormGroup {
    const group = formGroup.get(controlName) as UntypedFormGroup | null;

    if (!group) {
      console.error('Form group is not found');
    }

    return group ?? new UntypedFormGroup({});
  }
}
