import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardLinksComponent } from './auth-card-links.component';

describe('AuthCardLinksComponent', () => {
  let component: AuthCardLinksComponent;
  let fixture: ComponentFixture<AuthCardLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthCardLinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCardLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
