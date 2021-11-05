import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMinimalDesiredAmountComponent } from './registration-minimal-desired-amount.component';

describe('RegistrationMinimalDesiredAmountComponent', () => {
  let component: RegistrationMinimalDesiredAmountComponent;
  let fixture: ComponentFixture<RegistrationMinimalDesiredAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMinimalDesiredAmountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMinimalDesiredAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
