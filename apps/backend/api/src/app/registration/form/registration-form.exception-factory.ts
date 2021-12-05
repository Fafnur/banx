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

  // {
  //   "target": {
  //       "lastName": "ss",
  //       "firstName": "",
  //       "middleName": "Ivanovich",
  //       "birthdate": "2021-11-04T08:14:38.000Z",
  //       "gender": "male",
  //       "mobilePhone": "9231002233",
  //       "agreement": true,
  //       "email": "foo"
  //   },
  //   "value": "",
  //   "property": "firstName",
  //   "children": [],
  //   "constraints": {
  //      "minLength": "firstName must be longer than or equal to 1 characters"
  //   },
  //   "contexts": {
  //   "minLength": {
  //      "errorCode": 1003,
  //       "developerNote": "The validated string must contain 32 or more characters."
  //      }
  //    }
  // },
  return new BadRequestException(errors);
}
