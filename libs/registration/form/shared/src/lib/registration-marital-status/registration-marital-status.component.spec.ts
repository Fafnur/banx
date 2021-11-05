import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMaritalStatusComponent } from './registration-marital-status.component';

describe('RegistrationMaritalStatusComponent', () => {
  let component: RegistrationMaritalStatusComponent;
  let fixture: ComponentFixture<RegistrationMaritalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMaritalStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
