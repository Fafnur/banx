import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { ContainerModule } from '@banx/ui/container';
import { GridModule, GridService } from '@banx/ui/grid';

import { RegistrationLayoutComponent } from './registration-layout.component';
import { RegistrationLayoutComponentPo } from './registration-layout.component.po';

describe('RegistrationLayoutComponent', () => {
  let pageObject: RegistrationLayoutComponentPo;
  let fixture: ComponentFixture<RegistrationLayoutComponent>;
  let gridServiceMock: GridService;
  let up$: BehaviorSubject<boolean>;
  let registrationProcessFacadeMock: RegistrationProcessFacade;

  beforeEach(() => {
    gridServiceMock = mock(GridService);
    registrationProcessFacadeMock = mock(RegistrationProcessFacade);

    up$ = new BehaviorSubject<boolean>(false);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [CommonModule, RouterTestingModule, MockModule(GridModule), MockModule(ContainerModule)],
        declarations: [RegistrationLayoutComponent],
        providers: [providerOf(GridService, gridServiceMock), providerOf(RegistrationProcessFacade, registrationProcessFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(gridServiceMock.up(anything())).thenReturn(up$);
    fixture = TestBed.createComponent(RegistrationLayoutComponent);
    pageObject = new RegistrationLayoutComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile', () => {
    fixture.detectChanges();

    expect(pageObject.mobile).toBeTruthy();
    expect(pageObject.desktop).toBeFalsy();
  });

  it('should show desktop', () => {
    fixture.detectChanges();

    up$.next(true);
    fixture.detectChanges();

    expect(pageObject.mobile).toBeFalsy();
    expect(pageObject.desktop).toBeTruthy();
  });
});
