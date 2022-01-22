import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Min length mask validator
 *
 * @param length Min length for mask
 * @param regExp String or reg exp for replace
 */
export function russianMaskMinLengthValidator(length: number, regExp: string | RegExp = /[^a-zA-Zа-яА-ЯёЁ0-9]+/g): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (control.value && typeof control.value === 'string') {
      forbidden = control.value.replace(regExp, '').length < length;
    }

    return forbidden ? { minlength: true } : null;
  };
}

/**
 * Max length mask validator
 *
 * @param length Min length for mask
 * @param regExp String or reg exp for replace
 */
export function russianMaskMaxLengthValidator(length: number, regExp: string | RegExp = /[^a-zа-я0-9]+/g): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (control.value && typeof control.value === 'string') {
      forbidden = control.value.replace(regExp, '').length > length;
    }

    return forbidden ? { minlength: true } : null;
  };
}
