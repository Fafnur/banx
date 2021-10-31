export type RegistrationForm<K extends Record<string, any> = Record<string, any>> = K;

export interface RegistrationFormFieldValidate<F extends string = string, V = any> {
  field: F;
  value: V;
  subStep: string;
}

export interface RegistrationFormValidate<F extends Record<string, any> = Record<string, any>> {
  form: Partial<F>;
  subStep: string;
}

export type RegistrationFormValidateErrors<K extends keyof Record<string, any> = keyof Record<string, any>> = Partial<Record<K, string[]>>;

export interface RegistrationInitialFinish<
  F extends Record<string, any> = Record<string, any>,
  A extends Record<string, any> = Record<string, any>
> {
  form: F;
  additional: A;
}
