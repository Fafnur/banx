import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportBirthplaceComponent } from './registration-passport-birthplace.component';

describe('RegistrationPassportBirthplaceComponent', () => {
  let component: RegistrationPassportBirthplaceComponent;
  let fixture: ComponentFixture<RegistrationPassportBirthplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportBirthplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportBirthplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
