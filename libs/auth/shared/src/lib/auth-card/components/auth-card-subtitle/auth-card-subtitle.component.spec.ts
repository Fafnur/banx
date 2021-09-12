import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardSubtitleComponent } from './auth-card-subtitle.component';

describe('AuthCardSubtitleComponent', () => {
  let component: AuthCardSubtitleComponent;
  let fixture: ComponentFixture<AuthCardSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCardSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
