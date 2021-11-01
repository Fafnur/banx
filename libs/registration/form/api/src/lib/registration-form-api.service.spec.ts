import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import {
  REGISTRATION_FORM_CREATE_STUB,
  REGISTRATION_FORM_FIELD_VALIDATE_STUB,
  REGISTRATION_FORM_STUB,
  REGISTRATION_FORM_VALIDATE_STUB,
} from '@banx/registration/form/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { REGISTRATION_FORM_API_ROUTES, RegistrationFormApiService } from './registration-form-api.service';

describe('RegistrationFormApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RegistrationFormApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [RegistrationFormApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationFormApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('load()', () => {
    it('should return registrationForm', () => {
      service.load(PROCESS_ID_STUB).subscribe({
        next: (data) => {
          expect(data).toEqual(REGISTRATION_FORM_STUB);
        },
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.load(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('GET');

      req.flush(REGISTRATION_FORM_STUB);
    });

    it('should return registrationForm error', () => {
      service.load(PROCESS_ID_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.load(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('create()', () => {
    it('should create registrationForm', () => {
      service.create(PROCESS_ID_STUB, REGISTRATION_FORM_CREATE_STUB).subscribe({
        next: (data) => {
          expect(data).toBeNull();
        },
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.create(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should create registrationForm error', () => {
      service.create(PROCESS_ID_STUB, REGISTRATION_FORM_CREATE_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.create(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('validate()', () => {
    it('should validate', () => {
      service.validate(PROCESS_ID_STUB, REGISTRATION_FORM_VALIDATE_STUB).subscribe({
        next: (data) => {
          expect(data).toBeNull();
        },
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.validate(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return validate error', () => {
      service.validate(PROCESS_ID_STUB, REGISTRATION_FORM_VALIDATE_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.validate(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('validateUnique()', () => {
    it('should return validate unique', () => {
      service.validateUnique(PROCESS_ID_STUB, REGISTRATION_FORM_FIELD_VALIDATE_STUB).subscribe({
        next: (data) => {
          expect(data).toBeNull();
        },
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.validateUnique(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return validateUnique error', () => {
      service.validateUnique(PROCESS_ID_STUB, REGISTRATION_FORM_FIELD_VALIDATE_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FORM_API_ROUTES.validateUnique(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
