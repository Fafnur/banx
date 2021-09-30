import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { TRACKER_RECORDS_DTO_STUB } from '@banx/trackers/common';

import { TRACKER_API_ROUTES, TrackerApiService } from './tracker-api.service';

describe('TrackerLiteApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: TrackerApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [TrackerApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TrackerApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('save()', () => {
    it('should return tracker save success', () => {
      service.save(TRACKER_RECORDS_DTO_STUB).subscribe((data) => {
        expect(data).toBeNull();
      });
      const req = httpTestingController.expectOne(TRACKER_API_ROUTES.save);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return tracker save error', () => {
      service.save(TRACKER_RECORDS_DTO_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });
      const req = httpTestingController.expectOne(TRACKER_API_ROUTES.save);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
