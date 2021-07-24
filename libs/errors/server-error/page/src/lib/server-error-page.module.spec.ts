import { TestBed } from '@angular/core/testing';

import { ServerErrorPagePageModule } from './server-error-page-page.module';

describe('ErrorsServerErrorPagePageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerErrorPagePageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ServerErrorPagePageModule).toBeTruthy();
  });
});
