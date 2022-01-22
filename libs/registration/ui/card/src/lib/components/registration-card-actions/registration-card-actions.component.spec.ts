import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCardActionsComponent } from './registration-card-actions.component';

describe('RegistrationCardActionsComponent', () => {
  let component: RegistrationCardActionsComponent;
  let fixture: ComponentFixture<RegistrationCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
