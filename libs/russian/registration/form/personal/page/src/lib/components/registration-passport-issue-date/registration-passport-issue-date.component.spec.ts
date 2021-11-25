import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportIssueDateComponent } from './registration-passport-issue-date.component';

describe('RegistrationPassportIssueDateComponent', () => {
  let component: RegistrationPassportIssueDateComponent;
  let fixture: ComponentFixture<RegistrationPassportIssueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportIssueDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportIssueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
