import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { RegistrationConversion } from '@banx/registration/conversion/common';

export const loadConversion = createAction('[RegistrationConversion] Load Conversion');

export const loadConversionSuccess = createAction('[RegistrationConversion] Load Conversion Success', payload<RegistrationConversion>());

export const loadConversionFailure = createAction('[RegistrationConversion] Load Conversion Failure', payload<HttpErrorResponse>());

export const completeConversion = createAction('[RegistrationConversion] Complete Conversion');

export const completeConversionSuccess = createAction('[RegistrationConversion] Complete Conversion Success');

export const completeConversionFailure = createAction('[RegistrationConversion] Complete Conversion Failure', payload<HttpErrorResponse>());
