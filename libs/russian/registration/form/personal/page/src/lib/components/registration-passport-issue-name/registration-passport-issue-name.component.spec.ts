import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportIssueNameComponent } from './registration-passport-issue-name.component';

describe('RegistrationPassportIssueNameComponent', () => {
  let component: RegistrationPassportIssueNameComponent;
  let fixture: ComponentFixture<RegistrationPassportIssueNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportIssueNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportIssueNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
