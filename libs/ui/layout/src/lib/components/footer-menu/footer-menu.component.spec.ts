import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { MENU_STUB } from '@banx/core/menu/common';
import { providerOf } from '@banx/core/testing';
import { AccordionModule } from '@banx/ui/accordion';
import { ContainerModule } from '@banx/ui/container';

import { FooterMenuListModule } from './components/footer-menu-list/footer-menu-list.module';
import { FooterMenuComponent } from './footer-menu.component';
import { FooterMenuComponentPo } from './footer-menu.component.po';

describe('CopyrightComponent', () => {
  let pageObject: FooterMenuComponentPo;
  let fixture: ComponentFixture<FooterMenuComponent>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);
    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(ContainerModule), MockModule(FooterMenuListModule), MockModule(AccordionModule)],
        declarations: [FooterMenuComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock), MENU_STUB],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    fixture = TestBed.createComponent(FooterMenuComponent);
    pageObject = new FooterMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.accordion).toBeTruthy();
  });

  it('should show desktop', () => {
    fixture.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.list).toBeTruthy();
  });
});
