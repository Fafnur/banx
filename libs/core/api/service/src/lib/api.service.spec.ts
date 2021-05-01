import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { apiErrorStub, apiMockError } from './api.stub';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;
  const path = '/api/path';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('get()', () => {
    it('should return get response', () => {
      service.get(path).subscribe((data) => expect(data).toBeNull());
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('GET');

      req.flush(null);
    });

    it('should return get error', () => {
      service.get(path).subscribe(
        () => {
          /**/
        },
        (data) => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiMockError);
    });
  });

  describe('post()', () => {
    it('should return post response', () => {
      service.post(path).subscribe((data) => expect(data).toBeNull());
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('POST');

      req.flush(null);
    });

    it('should return post error', () => {
      service.post(path).subscribe(
        () => {
          /**/
        },
        (data) => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiMockError);
    });
  });

  describe('put()', () => {
    it('should return put response', () => {
      service.put(path, {}).subscribe((data) => expect(data).toBeNull());
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('PUT');

      req.flush(null);
    });

    it('should return put error', () => {
      service.put(path, {}).subscribe(
        () => {
          /**/
        },
        (data) => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiMockError);
    });
  });

  describe('patch()', () => {
    it('should return patch response', () => {
      service.patch(path, {}).subscribe((data) => expect(data).toBeNull());
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('PATCH');

      req.flush(null);
    });

    it('should return patch error', () => {
      service.patch(path, {}).subscribe(
        () => {
          /**/
        },
        (data) => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiMockError);
    });
  });

  describe('delete()', () => {
    it('should return delete response', () => {
      service.delete(path).subscribe((data) => expect(data).toBeNull());
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('DELETE');

      req.flush(null);
    });

    it('should return delete error', () => {
      service.patch(path, {}).subscribe(
        () => {
          /**/
        },
        (data) => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiMockError);
    });
  });
});
