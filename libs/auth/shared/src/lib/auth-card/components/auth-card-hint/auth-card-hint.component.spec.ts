import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardHintComponent } from './auth-card-hint.component';

describe('AuthCardHintComponent', () => {
  let component: AuthCardHintComponent;
  let fixture: ComponentFixture<AuthCardHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCardHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCardHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
