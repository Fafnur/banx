import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGenderComponent } from './registration-gender.component';

describe('RegistrationGenderComponent', () => {
  let component: RegistrationGenderComponent;
  let fixture: ComponentFixture<RegistrationGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationGenderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
