import { TestBed } from '@angular/core/testing';

import { ErrorsServerErrorPagePageModule } from './errors-server-error-page-page.module';

describe('ErrorsServerErrorPagePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsServerErrorPagePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsServerErrorPagePageModule).toBeTruthy();
  });
});
