import { TestBed } from '@angular/core/testing';

import { ApiContentTypeModule } from './api-content-type.module';

describe('ApiContentTypeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiContentTypeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ApiContentTypeModule).toBeTruthy();
  });
});
