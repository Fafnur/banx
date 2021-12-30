export enum RegistrationProcessKeys {
  ProcessId = 'registrationProcessId',
  SelectedStepId = 'registrationSelected',
  SelectedSubStep = 'registrationSelectedSubStep',
}

// RegistrationStepGlobal
export enum RegistrationStepType {
  Form = 'form',
  Data = 'data',
  Social = 'social',
  User = 'user',
  Decision = 'decision',
  Conversion = 'conversion',
  Finish = 'finish',
}

export interface RegistrationStepDto<T = string> {
  readonly id: number;
  readonly name: T;
  readonly finishedAt: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RegistrationStepEntity<T = string> extends RegistrationStepDto<T> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RegistrationStep<T = string> extends RegistrationStepEntity<T> {}

export interface RegistrationProcessDto<T extends string = string> {
  readonly processId: string;
  readonly finished: boolean;
  readonly steps: RegistrationStepDto<T>[];
  readonly user: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RegistrationProcess<T extends string = string> extends RegistrationProcessDto<T> {}

export interface RegistrationProcessRestore {
  processId: string | null;
  selected: number | null;
  subStep: string | null;
}
export interface RegistrationStepSelected {
  step: RegistrationStep;
  subStep: string | null;
}

export const REGISTRATION_FINISHED_STEP: RegistrationStep = {
  id: 9999,
  finishedAt: null,
  name: 'finished',
};

export const REGISTRATION_STEPS: RegistrationStepType[] = [
  RegistrationStepType.Form,
  RegistrationStepType.Data,
  RegistrationStepType.Social,
  RegistrationStepType.User,
  RegistrationStepType.Decision,
  RegistrationStepType.Conversion,
  RegistrationStepType.Finish,
];

// RegistrationStepGlobal
export enum RegistrationFormSubSteps {
  Personal = 'personal',
  Sms = 'sms',
  Family = 'family',
  Employment = 'employment',
  Additional = 'additional',
}

export const REGISTRATION_SUB_STEPS: Record<string, string[]> = {
  [RegistrationStepType.Form]: [
    RegistrationFormSubSteps.Personal,
    RegistrationFormSubSteps.Sms,
    RegistrationFormSubSteps.Family,
    RegistrationFormSubSteps.Employment,
    RegistrationFormSubSteps.Additional,
  ],
  [RegistrationStepType.Data]: [],
  [RegistrationStepType.Social]: [],
  [RegistrationStepType.User]: [],
  [RegistrationStepType.Decision]: [],
  [RegistrationStepType.Conversion]: [],
  [RegistrationStepType.Finish]: [],
  [REGISTRATION_FINISHED_STEP.name]: [],
};
