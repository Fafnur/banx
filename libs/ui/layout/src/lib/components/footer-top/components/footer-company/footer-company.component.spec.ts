import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { MENU_STUB } from '@banx/core/menu/common';
import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { FooterCompanyComponent } from './footer-company.component';
import { FooterCompanyComponentPo } from './footer-company.component.po';

describe('FooterCompanyComponent', () => {
  let pageObject: FooterCompanyComponentPo;
  let fixture: ComponentFixture<FooterCompanyComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(NavigationSharedModule)],
        declarations: [FooterCompanyComponent],
        providers: [PATHS_STUB, MENU_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCompanyComponent);
    pageObject = new FooterCompanyComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.link.length).toBe(10);
  });
});
