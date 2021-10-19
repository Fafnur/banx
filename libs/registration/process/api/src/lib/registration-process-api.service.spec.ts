import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { castRegistrationProcess, REGISTRATION_PROCESS_DTO_STUB, REGISTRATION_PROCESS_STUB } from '@banx/registration/process/common';

import { REGISTRATION_PROCESS_API_ROUTES, RegistrationProcessApiService } from './registration-process-api.service';

describe('RegistrationProcessApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RegistrationProcessApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreApiTestingModule],
      providers: [RegistrationProcessApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationProcessApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('steps()', () => {
    const path = REGISTRATION_PROCESS_API_ROUTES.steps;

    it('should return steps', () => {
      service.steps().subscribe({
        next: (data) => {
          expect(data).toEqual(castRegistrationProcess(REGISTRATION_PROCESS_DTO_STUB));
        },
      });
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('GET');

      req.flush(REGISTRATION_PROCESS_STUB);
    });

    it('should return registration process error', () => {
      service.steps().subscribe({
        error: (data) => expect(data.error.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(path);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
