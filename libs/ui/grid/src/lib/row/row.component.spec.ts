import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridBreakpointName } from '../grid.util';
import { RowComponent } from './row.component';
import { RowComponentPo } from './row.component.po';

@Component({
  template: `<banx-ui-row automation-id="row" [mode]="mode"></banx-ui-row>`,
})
export class WrapperComponent {
  mode = GridBreakpointName.Xs;
}

describe('RowComponent', () => {
  let pageObject: RowComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [RowComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RowComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set class row-xs', () => {
    fixture.detectChanges();

    expect(pageObject.hasRowClass(`row-${GridBreakpointName.Xs}`)).toBeTruthy();
  });
});
