import { TestBed } from '@angular/core/testing';

import { ToolbarModule } from './toolbar.module';

describe('ToolbarModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ToolbarModule).toBeTruthy();
  });
});
