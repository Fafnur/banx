import { NavigationPaths } from '@banx/core/navigation/common';

import {
  REGISTRATION_FINISHED_STEP,
  REGISTRATION_SUB_STEPS,
  RegistrationFormSubSteps,
  RegistrationProcess,
  RegistrationProcessDto,
  RegistrationStep,
  RegistrationStepSelected,
  RegistrationStepType,
} from './registration-process.interface';

export function castRegistrationProcess(payload: RegistrationProcessDto): RegistrationProcess {
  return {
    processId: payload.processId,
    finished: payload.finished,
    steps: Object.values(payload.steps).map((step) => ({ ...step, subStep: null })),
  };
}

export function selectStep(steps: RegistrationStep[], subStep?: string | null): RegistrationStepSelected {
  let selectedStep: RegistrationStep | null = null;
  for (const step of steps) {
    if (!step.finishedAt) {
      selectedStep = step;
      break;
    }
  }

  if (!selectedStep) {
    selectedStep = REGISTRATION_FINISHED_STEP;
  }
  let selectedSubStep = subStep && REGISTRATION_SUB_STEPS[selectedStep.name]?.includes(subStep) ? subStep : null;
  if (!selectedSubStep && REGISTRATION_SUB_STEPS[selectedStep.name].length) {
    selectedSubStep = REGISTRATION_SUB_STEPS[selectedStep.name][0];
  }

  return { step: selectedStep, subStep: selectedSubStep };
}

export function selectStepContinue(
  steps: RegistrationStep[],
  subStep?: string | null,
  forward: 'next' | 'prev' = 'next'
): RegistrationStepSelected {
  let selectedStep: RegistrationStep | null = null;
  for (const step of steps) {
    if (!step.finishedAt) {
      selectedStep = step;
      break;
    }
  }

  if (!selectedStep) {
    selectedStep = REGISTRATION_FINISHED_STEP;
  }

  const subSteps = REGISTRATION_SUB_STEPS[selectedStep.name] ?? [];
  let selectedSubStep = subStep && subSteps.includes(subStep) ? subStep : null;
  if (!selectedSubStep && subSteps.length) {
    selectedSubStep = subSteps[0];
  } else {
    for (const [index, subStepName] of subSteps.entries()) {
      if (subStepName === subStep) {
        if (forward === 'next') {
          selectedSubStep = index + 1 < subSteps.length ? subSteps[index + 1] : subStep;
        } else {
          selectedSubStep = index > 0 ? subSteps[index - 1] : subStep;
        }
        break;
      }
    }
  }

  return { step: selectedStep, subStep: selectedSubStep };
}

export function getRegistrationPath(payload: RegistrationStepSelected, paths: NavigationPaths): string {
  let path = paths.registration;
  switch (payload.step.name) {
    case RegistrationStepType.Data:
      path = paths.registrationData;
      break;
    case RegistrationStepType.Social:
      path = paths.registrationSocial;
      break;
    case RegistrationStepType.Decision:
      path = paths.registrationDecision;
      break;
    case RegistrationStepType.User:
      path = paths.registrationUser;
      break;
    case RegistrationStepType.Conversion:
      path = paths.registrationConversion;
      break;
    case RegistrationStepType.Finish:
      path = paths.registrationFinish;
      break;
    case RegistrationStepType.Form:
      path = paths.registrationForm;
      if (payload.subStep) {
        switch (payload.subStep) {
          case RegistrationFormSubSteps.Personal:
            path = paths.registrationFormPersonal;
            break;
          case RegistrationFormSubSteps.Sms:
            path = paths.registrationFormSms;
            break;
          case RegistrationFormSubSteps.Family:
            path = paths.registrationFormFamily;
            break;
          case RegistrationFormSubSteps.Employment:
            path = paths.registrationFormEmployment;
            break;
          case RegistrationFormSubSteps.Additional:
            path = paths.registrationFormAdditional;
            break;
        }
      }
  }

  return path;
}
