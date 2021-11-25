import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportSeriesNumberComponent } from './registration-passport-series-number.component';

describe('RegistrationPassportSeriesNumberComponent', () => {
  let component: RegistrationPassportSeriesNumberComponent;
  let fixture: ComponentFixture<RegistrationPassportSeriesNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportSeriesNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportSeriesNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
