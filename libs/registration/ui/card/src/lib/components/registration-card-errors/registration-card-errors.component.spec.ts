import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCardErrorsComponent } from './registration-card-errors.component';

describe('RegistrationCardErrorsComponent', () => {
  let component: RegistrationCardErrorsComponent;
  let fixture: ComponentFixture<RegistrationCardErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationCardErrorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCardErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
