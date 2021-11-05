import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationJobDescriptionComponent } from './registration-job-description.component';

describe('RegistrationJobDescriptionComponent', () => {
  let component: RegistrationJobDescriptionComponent;
  let fixture: ComponentFixture<RegistrationJobDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationJobDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
