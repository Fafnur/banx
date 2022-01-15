import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { RegistrationDataFacade } from '@banx/registration/data/state';
import { RegistrationCardModule } from '@banx/registration/ui/card';
import { RegistrationStepErrorModule } from '@banx/russian/registration/ui/step-error';
import { SpinnerModule } from '@banx/ui/spinner';

import { RegistrationDataPageComponent } from './registration-data-page.component';
import { RegistrationDataPageComponentPo } from './registration-data-page.component.po';

describe('RegistrationDataPageComponent', () => {
  let pageObject: RegistrationDataPageComponentPo;
  let fixture: ComponentFixture<RegistrationDataPageComponent>;
  let registrationDataFacadeMock: RegistrationDataFacade;
  let dataFinishFailure$: ReplaySubject<HttpErrorResponse>;
  let detectFinished$: ReplaySubject<any>;

  beforeEach(() => {
    registrationDataFacadeMock = mock(RegistrationDataFacade);
    dataFinishFailure$ = new ReplaySubject<HttpErrorResponse>(1);
    detectFinished$ = new ReplaySubject<any>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RouterTestingModule,
        SpinnerModule,
        MockModule(MatButtonModule),
        MockModule(RegistrationCardModule),
        MockModule(RegistrationStepErrorModule),
      ],
      declarations: [RegistrationDataPageComponent],
      providers: [providerOf(RegistrationDataFacade, registrationDataFacadeMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(registrationDataFacadeMock.detectFinished$).thenReturn(detectFinished$);
    when(registrationDataFacadeMock.dataFinishFailure$).thenReturn(dataFinishFailure$);

    fixture = TestBed.createComponent(RegistrationDataPageComponent);
    pageObject = new RegistrationDataPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('Местоположение');
    expect(pageObject.contentText).toBe(
      // eslint-disable-next-line max-len
      'После нажатия на кнопку «Продолжить» будет запрошено ваше местоположение. В диалоговом окне вашего браузера нажмите «Разрешить» или «Сообщить местоположение».'
    );
    expect(pageObject.card).toBeTruthy();
    expect(pageObject.actions).toBeTruthy();
    expect(pageObject.submit).toBeTruthy();
    expect(pageObject.spinner).toBeNull();
  });
});
