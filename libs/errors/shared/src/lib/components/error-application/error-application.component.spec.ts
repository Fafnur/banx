import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';

import { ErrorApplicationComponent } from './error-application.component';
import { ErrorApplicationComponentPo } from './error-application.component.po';

describe('ErrorApplicationComponent', () => {
  let pageObject: ErrorApplicationComponentPo;
  let fixture: ComponentFixture<ErrorApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(ContainerModule), MockModule(NavigationSharedModule)],
      declarations: [ErrorApplicationComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorApplicationComponent);
    pageObject = new ErrorApplicationComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show error app', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.preview).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.hint).toBeTruthy();
    expect(pageObject.code).toBeTruthy();
    expect(pageObject.links).toBeTruthy();
    expect(pageObject.appStore).toBeTruthy();
    expect(pageObject.googlePlay).toBeTruthy();
    expect(pageObject.download).toBeTruthy();
  });
});
