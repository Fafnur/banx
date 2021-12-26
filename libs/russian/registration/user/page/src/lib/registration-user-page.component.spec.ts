import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUserPageComponent } from './registration-user-page.component';

describe('RegistrationSocialPageComponent', () => {
  let component: RegistrationUserPageComponent;
  let fixture: ComponentFixture<RegistrationUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationUserPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUserPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
