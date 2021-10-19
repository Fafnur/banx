// RegistrationStepGlobal
export enum RegistrationProcessType {
  Form = 'form',
  Data = 'data',
  Social = 'social',
  User = 'user',
  Decision = 'decision',
  Conversion = 'conversion',
  Finish = 'finish',
}

export interface RegistrationStepDto<T = string> {
  readonly name: T;
  readonly finishedAt: string | null;
}

export interface RegistrationStepEntity<T = string, S = string> {
  readonly name: T;
  readonly finishedAt: string | null;
  readonly subStep: S | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RegistrationStep<T = string, S = string> extends RegistrationStepEntity<T, S> {}

export interface RegistrationProcessDto<T extends string = string> {
  readonly processId: number;
  readonly finished: boolean;
  readonly steps: Record<T, RegistrationStepDto>;
}

export interface RegistrationProcess<T = string, S = string> {
  processId: number;
  finished: boolean;
  steps: RegistrationStepEntity<T, S>[];
}
