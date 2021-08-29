import { TestBed } from '@angular/core/testing';

import { TopMenuModule } from './top-menu.module';

describe('TopMenuModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(TopMenuModule).toBeTruthy();
  });
});
