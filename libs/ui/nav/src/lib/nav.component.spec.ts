import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { MENU_DEFAULT } from '@banx/core/menu/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { NavComponent } from './nav.component';
import { NavComponentPo } from './nav.component.po';

@Component({
  template: `<banx-nav automation-id="nav-links" [links]="links"></banx-nav>`,
})
export class WrapperComponent {
  links = MENU_DEFAULT;
}

describe('NavComponent', () => {
  let pageObject: NavComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(NavigationSharedModule)],
      declarations: [NavComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new NavComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.nav).toBeTruthy();
    expect(pageObject.links.length).toBe(7);
    expect(pageObject.labels.length).toBe(7);
  });
});
