import { AbstractControl } from '@angular/forms';

/**
 * Check a russian word
 *
 * @param control Form control
 */
export function russianWordValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null && control.value.length && !/^[ёЁа-яА-Я .-_]{0,58}[ёЁа-яА-Я]$/.test(control.value.trim())
    ? { isSpell: true }
    : null;
}

/**
 * Check a russian word
 *
 * @param control Form control
 */
export function russianWordExtendedValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null && control.value.length && !/[ёЁа-яА-Я0-9 .-_]/.test(control.value.trim()) ? { isSpell: true } : null;
}
