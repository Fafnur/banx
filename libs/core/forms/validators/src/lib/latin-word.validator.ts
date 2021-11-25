import { AbstractControl } from '@angular/forms';

export function latinWordValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null && control.value.length && !/^[a-zA-Z\s-]{0,180}[a-zA-Z]$/.test(control.value.trim())
    ? { latinWord: true }
    : null;
}

export function latinWordExtendedValidator(control: AbstractControl): Record<string, any> | null {
  return control.value != null && control.value.length && !/^[a-zA-Z0-9\s-_.,']{0,80}$/.test(control.value.trim())
    ? { latinWordExtended: true }
    : null;
}
