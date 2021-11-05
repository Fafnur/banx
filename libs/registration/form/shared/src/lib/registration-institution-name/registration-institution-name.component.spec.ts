import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInstitutionNameComponent } from './registration-institution-name.component';

describe('RegistrationInstitutionNameComponent', () => {
  let component: RegistrationInstitutionNameComponent;
  let fixture: ComponentFixture<RegistrationInstitutionNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationInstitutionNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInstitutionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
