import { TestBed } from '@angular/core/testing';

import { ContainerModule } from './container.module';

describe('UiContainerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ContainerModule).toBeTruthy();
  });
});
