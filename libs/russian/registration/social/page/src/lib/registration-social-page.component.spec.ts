import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSocialPageComponent } from './registration-social-page.component';

describe('RegistrationSocialPageComponent', () => {
  let component: RegistrationSocialPageComponent;
  let fixture: ComponentFixture<RegistrationSocialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationSocialPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSocialPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
