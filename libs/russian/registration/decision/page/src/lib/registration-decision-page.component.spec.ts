import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDecisionPageComponent } from './registration-decision-page.component';

describe('RegistrationSocialPageComponent', () => {
  let component: RegistrationDecisionPageComponent;
  let fixture: ComponentFixture<RegistrationDecisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDecisionPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDecisionPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
