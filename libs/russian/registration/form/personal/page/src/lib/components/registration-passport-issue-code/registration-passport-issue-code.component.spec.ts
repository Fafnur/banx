import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportIssueCodeComponent } from './registration-passport-issue-code.component';

describe('RegistrationPassportIssueCodeComponent', () => {
  let component: RegistrationPassportIssueCodeComponent;
  let fixture: ComponentFixture<RegistrationPassportIssueCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportIssueCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportIssueCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
