import { TestBed } from '@angular/core/testing';

import { SideMenuModule } from './side-menu.module';

describe('SideMenuModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(SideMenuModule).toBeTruthy();
  });
});
