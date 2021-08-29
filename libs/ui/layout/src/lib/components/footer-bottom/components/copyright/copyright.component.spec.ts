import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopyrightComponent } from './copyright.component';
import { CopyrightComponentPo } from './copyright.component.po';

describe('CopyrightComponent', () => {
  let pageObject: CopyrightComponentPo;
  let fixture: ComponentFixture<CopyrightComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [CopyrightComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightComponent);
    pageObject = new CopyrightComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.copyright).toBe(`©${new Date().getFullYear()}. Banx. All rights reserved.`);
  });
});
