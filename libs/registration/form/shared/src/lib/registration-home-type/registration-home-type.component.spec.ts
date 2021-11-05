import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationHomeTypeComponent } from './registration-home-type.component';

describe('RegistrationHomeTypeComponent', () => {
  let component: RegistrationHomeTypeComponent;
  let fixture: ComponentFixture<RegistrationHomeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationHomeTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationHomeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
