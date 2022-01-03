import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { REGISTRATION_FINISH_RESPONSE_STUB } from '@banx/registration/finish/common';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { REGISTRATION_FINISH_API_ROUTES, RegistrationFinishApiService } from './registration-finish-api.service';

describe('RegistrationFinishApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RegistrationFinishApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [RegistrationFinishApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationFinishApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('finish()', () => {
    it('should return finish success', () => {
      service.finish(PROCESS_ID_STUB).subscribe({
        next: (data) => expect(data).toEqual(REGISTRATION_FINISH_RESPONSE_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FINISH_API_ROUTES.finish(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(REGISTRATION_FINISH_RESPONSE_STUB);
    });

    it('should return finish error', () => {
      service.finish(PROCESS_ID_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_FINISH_API_ROUTES.finish(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
