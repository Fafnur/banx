import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { MENU_STUB } from '@banx/core/menu/common';
import { AccordionModule } from '@banx/ui/accordion';

import { SideMenuComponent } from './side-menu.component';
import { SideMenuComponentPo } from './side-menu.component.po';

describe('SideMenuComponent', () => {
  let pageObject: SideMenuComponentPo;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MockModule(MatButtonModule), MockModule(MatIconModule), MockModule(AccordionModule)],
        declarations: [SideMenuComponent],
        providers: [MENU_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    pageObject = new SideMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.toggle).toBeTruthy();
    expect(pageObject.sidenav).toBeTruthy();
    expect(pageObject.close).toBeTruthy();
    expect(pageObject.sidenavBackdrop).toBeTruthy();
  });
});
