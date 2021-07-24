import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorStatusColor, ErrorStatusComponent } from './error-status.component';
import { ErrorStatusComponentPo } from './error-status.component.po';

@Component({
  template: `<banx-error-status automation-id="status" [color]="color"></banx-error-status>`,
})
export class WrapperComponent {
  color!: ErrorStatusColor;
}

describe('ErrorStatusComponent', () => {
  let pageObject: ErrorStatusComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ErrorStatusComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new ErrorStatusComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should add class', () => {
    fixture.detectChanges();

    pageObject.setColor('primary');
    fixture.detectChanges();

    expect(pageObject.hasColor('is-primary')).toBeTruthy();

    pageObject.setColor('accent');
    fixture.detectChanges();

    expect(pageObject.hasColor('is-accent')).toBeTruthy();

    pageObject.setColor('active');
    fixture.detectChanges();

    expect(pageObject.hasColor('is-active')).toBeTruthy();

    pageObject.setColor('danger');
    fixture.detectChanges();

    expect(pageObject.hasColor('is-danger')).toBeTruthy();
  });
});
