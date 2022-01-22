import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { providerOf } from '@banx/core/testing';
import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { ContainerModule } from '@banx/ui/container';

import { RegistrationRestartPageComponent } from './registration-restart-page.component';
import { RegistrationRestartPageComponentPo } from './registration-restart-page.component.po';

describe('RegistrationRestartPageComponent', () => {
  let pageObject: RegistrationRestartPageComponentPo;
  let fixture: ComponentFixture<RegistrationRestartPageComponent>;
  let registrationProcessFacadeMock: RegistrationProcessFacade;

  beforeEach(() => {
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);
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
        MockModule(ContainerModule),
      ],
      declarations: [RegistrationRestartPageComponent],
      providers: [PATHS_STUB, providerOf(RegistrationProcessFacade, registrationProcessFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRestartPageComponent);
    pageObject = new RegistrationRestartPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Restart registration');
    expect(pageObject.contentText).toBe('Are you sure you want to start registering again?');
    expect(pageObject.card).toBeTruthy();
    expect(pageObject.actions).toBeTruthy();
    expect(pageObject.reset).toBeTruthy();
    expect(pageObject.continue).toBeTruthy();
  });
});
