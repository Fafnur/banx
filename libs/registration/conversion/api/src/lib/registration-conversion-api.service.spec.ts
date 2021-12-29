import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { REGISTRATION_CONVERSION_STUB } from '@banx/registration/conversion/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { REGISTRATION_CONVERSION_API_ROUTES, RegistrationConversionApiService } from './registration-conversion-api.service';

describe('RegistrationConversionApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RegistrationConversionApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [RegistrationConversionApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationConversionApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('load()', () => {
    it('should return load success', () => {
      service.load(PROCESS_ID_STUB).subscribe({
        next: (data) => expect(data).toEqual(REGISTRATION_CONVERSION_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_CONVERSION_API_ROUTES.load(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('GET');

      req.flush(REGISTRATION_CONVERSION_STUB);
    });

    it('should return load error', () => {
      service.load(PROCESS_ID_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_CONVERSION_API_ROUTES.load(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('complete()', () => {
    it('should return complete success', () => {
      service.complete(PROCESS_ID_STUB).subscribe({
        next: (data) => expect(data).toBeNull(),
      });
      const req = httpTestingController.expectOne(REGISTRATION_CONVERSION_API_ROUTES.complete(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return complete error', () => {
      service.complete(PROCESS_ID_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_CONVERSION_API_ROUTES.complete(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
