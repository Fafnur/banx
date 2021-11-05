import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFirstNameComponent } from './registration-first-name.component';

describe('RegistrationFirstNameComponent', () => {
  let component: RegistrationFirstNameComponent;
  let fixture: ComponentFixture<RegistrationFirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationFirstNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
