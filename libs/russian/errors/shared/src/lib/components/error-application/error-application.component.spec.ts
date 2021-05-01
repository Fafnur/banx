import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { UiContainerComponent } from '@banx/russian/ui/container';

import { ErrorApplicationComponent } from './error-application.component';

describe('ErrorApplicationComponent', () => {
  let component: ErrorApplicationComponent;
  let fixture: ComponentFixture<ErrorApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorApplicationComponent, MockComponents(UiContainerComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
