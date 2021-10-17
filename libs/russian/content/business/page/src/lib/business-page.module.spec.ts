import { TestBed, waitForAsync } from '@angular/core/testing';

import { TopMenuModule } from '@banx/ui/layout';

import { BusinessPageModule } from './business-page.module';

describe('BusinessPageModule', () => {
  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [BusinessPageModule, TopMenuModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(BusinessPageModule).toBeTruthy();
  });
});
