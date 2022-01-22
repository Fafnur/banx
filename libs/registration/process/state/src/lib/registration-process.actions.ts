import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { RegistrationProcess, RegistrationProcessRestore, RegistrationStepSelected } from '@banx/registration/process/common';

export const init = createAction('[RegistrationProcess] Init');

export const restore = createAction('[RegistrationProcess] Restore', payload<RegistrationProcessRestore>());

export const loadProcess = createAction('[RegistrationProcess] Load Process');

export const loadProcessSuccess = createAction('[RegistrationProcess] Load Process Success', payload<RegistrationProcess>());

export const loadProcessFailure = createAction('[RegistrationProcess] Load Process Failure', payload<Record<string, any>>());

export const selectStep = createAction('[RegistrationProcess] Select Step');

export const selectStepSuccess = createAction('[RegistrationProcess] Select Step Success', payload<RegistrationStepSelected>());

export const selectStepFailure = createAction('[RegistrationProcess] Select Step Failure', payload<string>());

export const selectSubStep = createAction('[RegistrationProcess] Select SubStep Next', payload<'next' | 'prev'>());

export const selectSubStepSuccess = createAction('[RegistrationProcess] Select SubStep Next Success', payload<RegistrationStepSelected>());

export const selectSubStepFailure = createAction('[RegistrationProcess] Select Step Failure', payload<string>());

export const navigateToNextStep = createAction('[RegistrationProcess] Navigate To Next Step');

export const restartProcess = createAction('[RegistrationProcess] Restart Process');

export const setSubStep = createAction('[RegistrationProcess] Set Sub Step', payload<string | null>());
