import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule, MockPipe } from 'ng-mocks';

import { MENU_STUB } from '@banx/core/menu/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { NavModule } from '@banx/ui/nav';

import { MainMenuComponent } from './main-menu.component';
import { MainMenuComponentPo } from './main-menu.component.po';
import { MainMenuLinkActivePipe } from './main-menu-link-active.pipe';

describe('MainMenuComponent', () => {
  let pageObject: MainMenuComponentPo;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(NavigationSharedModule), MockModule(NavModule)],
        declarations: [MainMenuComponent, MockPipe(MainMenuLinkActivePipe)],
        providers: [MENU_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    pageObject = new MainMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.nav).toBeTruthy();
    expect(pageObject.home).toBeTruthy();
  });
});
