import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { CANVAS_FINGERPRINT_DTO_STUB, FONTS_FINGERPRINT_DTO_STUB, GEOLOCATION_FINGERPRINT_DTO_STUB } from '@banx/fingerprints/common';

import { FINGERPRINT_API_ROUTES, FingerprintApiService } from './fingerprint-api.service';

describe('FingerprintApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: FingerprintApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [FingerprintApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FingerprintApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('saveFonts()', () => {
    it('should return fonts save success', () => {
      service.saveFonts(FONTS_FINGERPRINT_DTO_STUB).subscribe((data) => {
        expect(data).toBeNull();
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveFonts);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return fonts save error', () => {
      service.saveFonts(FONTS_FINGERPRINT_DTO_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveFonts);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('saveCanvas()', () => {
    it('should return canvas save success', () => {
      service.saveCanvas(CANVAS_FINGERPRINT_DTO_STUB).subscribe((data) => {
        expect(data).toBeNull();
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveCanvas);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return canvas save error', () => {
      service.saveCanvas(CANVAS_FINGERPRINT_DTO_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveCanvas);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('saveGeolocation()', () => {
    it('should return geolocation save success', () => {
      service.saveGeolocation(GEOLOCATION_FINGERPRINT_DTO_STUB).subscribe((data) => {
        expect(data).toBeNull();
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveGeolocation);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return geolocation save error', () => {
      service.saveGeolocation(GEOLOCATION_FINGERPRINT_DTO_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });
      const req = httpTestingController.expectOne(FINGERPRINT_API_ROUTES.saveGeolocation);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
