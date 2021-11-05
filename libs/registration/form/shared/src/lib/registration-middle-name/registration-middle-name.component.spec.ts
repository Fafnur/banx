import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMiddleNameComponent } from './registration-middle-name.component';

describe('RegistrationMiddleNameComponent', () => {
  let component: RegistrationMiddleNameComponent;
  let fixture: ComponentFixture<RegistrationMiddleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMiddleNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMiddleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
