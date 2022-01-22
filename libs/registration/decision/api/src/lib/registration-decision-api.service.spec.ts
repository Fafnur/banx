import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { PROCESS_ID_STUB } from '@banx/registration/process/common';

import { REGISTRATION_DECISION_API_ROUTES, RegistrationDecisionApiService } from './registration-decision-api.service';

describe('RegistrationDecisionApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RegistrationDecisionApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [RegistrationDecisionApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrationDecisionApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('finish()', () => {
    it('should return create success', () => {
      service.makeDecision(PROCESS_ID_STUB).subscribe({
        next: (data) => expect(data).toBeNull(),
      });
      const req = httpTestingController.expectOne(REGISTRATION_DECISION_API_ROUTES.makeDecision(PROCESS_ID_STUB));
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return create error', () => {
      service.makeDecision(PROCESS_ID_STUB).subscribe({
        error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
      });
      const req = httpTestingController.expectOne(REGISTRATION_DECISION_API_ROUTES.makeDecision(PROCESS_ID_STUB));
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
