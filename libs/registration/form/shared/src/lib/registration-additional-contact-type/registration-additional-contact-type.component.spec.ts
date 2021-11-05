import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactTypeComponent } from './registration-additional-contact-type.component';

describe('RegistrationAdditionalContactTypeComponent', () => {
  let component: RegistrationAdditionalContactTypeComponent;
  let fixture: ComponentFixture<RegistrationAdditionalContactTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAdditionalContactTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAdditionalContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
