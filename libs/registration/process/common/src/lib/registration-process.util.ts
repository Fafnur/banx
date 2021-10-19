import { RegistrationProcess, RegistrationProcessDto } from './registration-process.interface';

export function castRegistrationProcess(payload: RegistrationProcessDto): RegistrationProcess {
  return {
    processId: payload.processId,
    finished: payload.finished,
    steps: Object.values(payload.steps).map((step) => ({ ...step, subStep: null })),
  };
}
