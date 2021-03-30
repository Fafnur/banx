import { TestBed } from '@angular/core/testing';

import { UiContainerModule } from './ui-container.module';

describe('UiContainerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiContainerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(UiContainerModule).toBeTruthy();
  });
});
