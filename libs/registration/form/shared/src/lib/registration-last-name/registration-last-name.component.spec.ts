import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLastNameComponent } from './registration-last-name.component';

describe('RegistrationLastNameComponent', () => {
  let component: RegistrationLastNameComponent;
  let fixture: ComponentFixture<RegistrationLastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationLastNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
