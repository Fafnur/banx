import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { ContainerModule } from '@banx/ui/container';

import { AuthModule } from './components/auth/auth.module';
import { BrandModule } from './components/brand/brand.module';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarComponentPo } from './toolbar.component.po';

describe('ToolbarComponent', () => {
  let pageObject: ToolbarComponentPo;
  let fixture: ComponentFixture<ToolbarComponent>;
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
        imports: [
          NoopAnimationsModule,
          MockModule(ContainerModule),
          MockModule(BrandModule),
          MockModule(MainMenuModule),
          MockModule(SideMenuModule),
          MockModule(AuthModule),
        ],
        declarations: [ToolbarComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    fixture = TestBed.createComponent(ToolbarComponent);
    pageObject = new ToolbarComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.sideMenu).toBeTruthy();
    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.mainMenu).toBeFalsy();
    expect(pageObject.auth).toBeTruthy();
  });

  it('should show desktop', () => {
    fixture.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.sideMenu).toBeFalsy();
    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.mainMenu).toBeTruthy();
    expect(pageObject.auth).toBeTruthy();
  });
});
