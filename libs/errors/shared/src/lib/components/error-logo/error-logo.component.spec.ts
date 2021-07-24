import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ENVIRONMENTS_DEFAULT } from '@banx/core/environments/service';

import { ErrorLogoComponent } from './error-logo.component';
import { ErrorLogoComponentPo } from './error-logo.component.po';

describe('ErrorLogoComponent', () => {
  let pageObject: ErrorLogoComponentPo;
  let fixture: ComponentFixture<ErrorLogoComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ErrorLogoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogoComponent);
    pageObject = new ErrorLogoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show link', () => {
    fixture.detectChanges();

    expect(pageObject.link).toBeTruthy();
    expect(pageObject.linkText).toBe(ENVIRONMENTS_DEFAULT.brand);
    expect(pageObject.linkHref).toBe('/');
  });
});
