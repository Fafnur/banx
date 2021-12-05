import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PlatformService } from '@banx/core/platform/service';

@Injectable({
  providedIn: 'root',
})
export class FormErrorsService {
  constructor(private readonly platformService: PlatformService, @Inject(DOCUMENT) private readonly document: Document) {}

  updateFormErrors(form: FormGroup, errors: Record<string, Record<string, string>>): void {
    for (const errorField of Object.keys(errors)) {
      const control = form.get(errorField);
      if (control && control.value != null) {
        control.setErrors(errors[errorField]);
      }
    }
    form.markAllAsTouched();
  }

  scrollToFirstError(form: FormGroup, ids: Record<string, string>): void {
    if (this.platformService.isBrowser && form?.controls) {
      for (const key of Object.keys(form.controls)) {
        const control = form.get(key);

        if (control?.errors && Object.values(control.errors).length) {
          const fieldId = ids[key];
          const element = this.document.getElementById(fieldId);
          if (element) {
            element.scrollIntoView({ block: 'center', behavior: 'smooth' });
            element.focus({ preventScroll: true });
            break;
          }
        }
      }
    }
  }
}
