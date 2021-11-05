import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCityComponent } from './registration-city.component';

describe('RegistrationCityComponent', () => {
  let component: RegistrationCityComponent;
  let fixture: ComponentFixture<RegistrationCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationCityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
