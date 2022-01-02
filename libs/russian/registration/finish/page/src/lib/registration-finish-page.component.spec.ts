import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFinishPageComponent } from './registration-finish-page.component';

describe('RegistrationSocialPageComponent', () => {
  let component: RegistrationFinishPageComponent;
  let fixture: ComponentFixture<RegistrationFinishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationFinishPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFinishPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
