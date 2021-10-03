import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { HttpHandlerStub } from '@banx/core/api/service';

import { ApiContentTypeInterceptor } from './api-content-type.interceptor';

describe('ApiContentTypeInterceptor', () => {
  let interceptor: ApiContentTypeInterceptor;
  const httpHandler = new HttpHandlerStub();
  const contentType = 'Content-Type';
  const method = 'GET';
  const url = '/test';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiContentTypeInterceptor],
    }).compileComponents();
  });

  beforeEach(() => {
    interceptor = TestBed.inject(ApiContentTypeInterceptor);
  });

  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });

  it('intercept() should set headers application/json', async () => {
    const result$ = interceptor.intercept(new HttpRequest<any>(method, url), httpHandler);
    const response = (await readFirst(result$)) as HttpResponse<any>;

    expect(response.headers.get(contentType)).toBe('application/json');
  });

  it('intercept() should set headers html/text', async () => {
    const params = { headers: new HttpHeaders({ [contentType]: 'html/text' }) };
    const result$ = interceptor.intercept(new HttpRequest<any>(method, url, params), httpHandler);
    const response = (await readFirst(result$)) as HttpResponse<any>;

    expect(response.headers.get(contentType)).toBe('html/text');
  });

  it('intercept() should not set content type', async () => {
    const params = { headers: new HttpHeaders({ enctype: 'multipart/form-data' }) };
    const result$ = interceptor.intercept(new HttpRequest<any>(method, url, params), httpHandler);
    const response = (await readFirst(result$)) as HttpResponse<any>;

    expect(response.headers.get(contentType)).toBeNull();
  });

  it('intercept() should  set content type for unknown enctype', async () => {
    const params = { headers: new HttpHeaders({ enctype: 'magic' }) };
    const result$ = interceptor.intercept(new HttpRequest<any>(method, url, params), httpHandler);
    const response = (await readFirst(result$)) as HttpResponse<any>;

    expect(response.headers.get(contentType)).toBe('application/json');
  });
});
