import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAdditionalContactNameComponent } from './registration-additional-contact-name.component';

describe('RegistrationAdditionalContactNameComponent', () => {
  let component: RegistrationAdditionalContactNameComponent;
  let fixture: ComponentFixture<RegistrationAdditionalContactNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAdditionalContactNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAdditionalContactNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
