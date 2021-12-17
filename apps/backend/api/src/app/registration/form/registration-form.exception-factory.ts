import { BadRequestException, ValidationError } from '@nestjs/common';

export function registrationFormExceptionFactory(validationErrors: ValidationError[]): BadRequestException {
  const errors: Record<string, Record<string, string>> = {};
  for (const validationError of validationErrors) {
    errors[validationError.property] = {};
    if (validationError.constraints) {
      for (const constraint of Object.keys(validationError.constraints)) {
        const context = validationError.contexts ? validationError.contexts[constraint] ?? null : null;
        errors[validationError.property][constraint] = context?.errorCode ?? validationError.constraints[constraint];
      }
    }
  }

  return new BadRequestException(errors);
}
