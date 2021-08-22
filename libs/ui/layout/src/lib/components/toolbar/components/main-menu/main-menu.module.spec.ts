import { TestBed } from '@angular/core/testing';

import { MainMenuModule } from './main-menu.module';

describe('MainMenuModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(MainMenuModule).toBeTruthy();
  });
});
