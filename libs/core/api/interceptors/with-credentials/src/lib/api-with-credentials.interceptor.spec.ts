import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiWithCredentialsInterceptor } from './api-with-credentials.interceptor';

describe('ApiWithCredentialsInterceptor', () => {
  let interceptor: ApiWithCredentialsInterceptor;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiWithCredentialsInterceptor],
    }).compileComponents();
  });

  beforeEach(() => {
    interceptor = TestBed.inject(ApiWithCredentialsInterceptor);
  });

  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
