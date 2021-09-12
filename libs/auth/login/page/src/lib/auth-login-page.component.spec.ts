import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginPageComponent } from './auth-login-page.component';

describe('AuthLoginPageComponent', () => {
  let component: AuthLoginPageComponent;
  let fixture: ComponentFixture<AuthLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthLoginPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
