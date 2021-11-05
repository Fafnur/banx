import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBirthdateComponent } from './registration-birthdate.component';

describe('RegistrationBirthdateComponent', () => {
  let component: RegistrationBirthdateComponent;
  let fixture: ComponentFixture<RegistrationBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationBirthdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
