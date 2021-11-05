import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOwnCarComponent } from './registration-own-car.component';

describe('RegistrationOwnCarComponent', () => {
  let component: RegistrationOwnCarComponent;
  let fixture: ComponentFixture<RegistrationOwnCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationOwnCarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOwnCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
