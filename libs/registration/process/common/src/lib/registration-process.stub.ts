import {
  RegistrationProcess,
  RegistrationProcessDto,
  RegistrationStep,
  RegistrationStepDto,
  RegistrationStepEntity,
} from './registration-process.interface';

export const REGISTRATION_STEP_DTO_STUB: RegistrationStepDto = {
  name: 'data',
  finishedAt: null,
};

export const REGISTRATION_STEP_ENTITY_STUB: RegistrationStepEntity = {
  ...REGISTRATION_STEP_DTO_STUB,
  subStep: null,
};

export const REGISTRATION_STEP_STUB: RegistrationStep = REGISTRATION_STEP_ENTITY_STUB;

export const REGISTRATION_PROCESS_DTO_STUB: RegistrationProcessDto = {
  processId: 1,
  finished: false,
  steps: {
    [REGISTRATION_STEP_STUB.name]: REGISTRATION_STEP_STUB,
  },
};

export const REGISTRATION_PROCESS_STUB: RegistrationProcess = {
  processId: 1,
  finished: false,
  steps: [REGISTRATION_STEP_STUB],
};
