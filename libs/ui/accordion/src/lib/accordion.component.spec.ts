import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { MENU_DEFAULT } from '@banx/core/menu/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { AccordionComponent } from './accordion.component';
import { AccordionComponentPo } from './accordion.component.po';

@Component({
  template: `<banx-accordion [links]="links"></banx-accordion>`,
})
export class WrapperComponent {
  links = MENU_DEFAULT;
}

describe('FooterMenuAccordionComponent', () => {
  let pageObject: AccordionComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NoopAnimationsModule,
          MockModule(NavigationSharedModule),
          MockModule(CdkAccordionModule),
          MockModule(MatIconModule),
        ],
        declarations: [AccordionComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new AccordionComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.accordion).toBeTruthy();
    expect(pageObject.items.length).toBe(7);
  });
});
