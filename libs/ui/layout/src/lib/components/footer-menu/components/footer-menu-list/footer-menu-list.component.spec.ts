import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { MENU_DEFAULT } from '@banx/core/menu/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { GridModule } from '@banx/ui/grid';

import { FooterMenuListComponent } from './footer-menu-list.component';
import { FooterMenuListComponentPo } from './footer-menu-list.component.po';

@Component({
  template: `<banx-footer-menu-list automation-id="menu-list" [links]="links"></banx-footer-menu-list>`,
})
export class WrapperComponent {
  links = MENU_DEFAULT;
}

describe('FooterMenuListComponent', () => {
  let pageObject: FooterMenuListComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(GridModule), MockModule(NavigationSharedModule)],
        declarations: [FooterMenuListComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new FooterMenuListComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.row).toBeTruthy();
    expect(pageObject.title.length).toBe(7);
    expect(pageObject.column.length).toBe(7);
    expect(pageObject.nav.length).toBe(7);
    expect(pageObject.link.length).toBe(52);
  });
});
