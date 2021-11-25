import { AbstractControl } from '@angular/forms';

/**
 * Check email
 *
 * @param control AbstractControl
 */
export function emailValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null &&
    control.value.length &&
    !/^[A-Za-z0-9_\-.]{1,64}@[A-Za-z0-9_\-.]{1,64}\.[A-Za-z0-9_-]{2,64}$/.test(control.value.trim())
    ? { email: true }
    : null;
}
