import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { API_ERROR_RESPONSE_STUB, API_ERROR_STUB, CoreApiTestingModule } from '@banx/core/api/service';
import { USER_AUTH_STUB, USER_CREDENTIALS_STUB, USER_SECRETS_STUB } from '@banx/users/common';

import { AUTH_API_ROUTES, AuthApiService } from './auth-api.service';

describe('AuthApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: AuthApiService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CoreApiTestingModule],
        providers: [AuthApiService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('login()', () => {
    const path = AUTH_API_ROUTES.login;

    it('should return login success', () => {
      service.login(USER_CREDENTIALS_STUB).subscribe((data) => expect(data).toEqual(USER_AUTH_STUB));
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('POST');

      req.flush(USER_AUTH_STUB);
    });

    it('should return login error', () => {
      service.login(USER_CREDENTIALS_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });

      const req = httpTestingController.expectOne(path);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });

  describe('recovery()', () => {
    const path = AUTH_API_ROUTES.recovery;

    it('should return recovery success', () => {
      service.recovery(USER_SECRETS_STUB).subscribe((data) => {
        expect(data).toBeNull();
      });

      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return recovery error', () => {
      service.recovery(USER_SECRETS_STUB).subscribe({
        error: (data) => {
          expect(data.error).toEqual(API_ERROR_STUB);
        },
      });

      const req = httpTestingController.expectOne(path);
      req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
    });
  });
});
