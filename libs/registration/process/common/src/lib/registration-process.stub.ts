import {
  RegistrationProcess,
  RegistrationProcessDto,
  RegistrationStep,
  RegistrationStepDto,
  RegistrationStepEntity,
} from './registration-process.interface';

export const PROCESS_ID_STUB = '123456';

export const REGISTRATION_STEP_DTO_STUB: RegistrationStepDto = {
  id: 1,
  name: 'form',
  finishedAt: null,
};

export const REGISTRATION_STEP_ENTITY_STUB: RegistrationStepEntity = REGISTRATION_STEP_DTO_STUB;

export const REGISTRATION_STEP_STUB: RegistrationStep = REGISTRATION_STEP_ENTITY_STUB;

export const REGISTRATION_PROCESS_DTO_STUB: RegistrationProcessDto = {
  processId: PROCESS_ID_STUB,
  finished: false,
  steps: [REGISTRATION_STEP_DTO_STUB],
  user: null,
};

export const REGISTRATION_PROCESS_STUB: RegistrationProcess = REGISTRATION_PROCESS_DTO_STUB;
