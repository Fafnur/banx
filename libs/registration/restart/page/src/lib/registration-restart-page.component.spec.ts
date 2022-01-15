import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { NAVIGATION_PATHS, PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { providerOf } from '@banx/core/testing';
import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';

import { RegistrationRestartPageComponent } from './registration-restart-page.component';
import { RegistrationRestartPageComponentPo } from './registration-restart-page.component.po';

describe('RegistrationRestartPageComponent', () => {
  let pageObject: RegistrationRestartPageComponentPo;
  let fixture: ComponentFixture<RegistrationRestartPageComponent>;
  let navigationServiceMock: NavigationService;
  let registrationProcessFacadeMock: RegistrationProcessFacade;

  beforeEach(() => {
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MockModule(MatButtonModule),
        MockModule(RegistrationCardModule),
        MockModule(NavigationSharedModule),
      ],
      declarations: [RegistrationRestartPageComponent],
      providers: [
        PATHS_STUB,
        providerOf(NavigationService, navigationServiceMock),
        providerOf(RegistrationProcessFacade, registrationProcessFacadeMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);

    fixture = TestBed.createComponent(RegistrationRestartPageComponent);
    pageObject = new RegistrationRestartPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Reset registration');
    expect(pageObject.contentText).toBe('Are you sure you want to start registering again?');
    expect(pageObject.card).toBeTruthy();
    expect(pageObject.actions).toBeTruthy();
    expect(pageObject.reset).toBeTruthy();
    expect(pageObject.continue).toBeTruthy();
  });
});
