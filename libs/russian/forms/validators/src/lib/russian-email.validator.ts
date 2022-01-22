import { AbstractControl } from '@angular/forms';

/**
 * Check email
 *
 * @param control AbstractControl
 */
export function russianEmailValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null &&
    control.value.length &&
    !/^[a-zA-Zа-яА-ЯёЁ0-9_\-.]{1,64}@[a-zA-Zа-яА-ЯёЁ0-9_\-.]{1,64}\.[a-zA-Zа-яА-ЯёЁ0-9_-]{2,64}$/.test(control.value.trim())
    ? { email: true }
    : null;
}
