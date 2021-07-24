import { TestBed } from '@angular/core/testing';

import { ServerErrorPageRoutingModule } from './server-error-page-routing.module';

describe('ErrorsServerErrorPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerErrorPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ServerErrorPageRoutingModule).toBeTruthy();
  });
});
