import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmployerNameComponent } from './registration-employer-name.component';

describe('RegistrationEmployerNameComponent', () => {
  let component: RegistrationEmployerNameComponent;
  let fixture: ComponentFixture<RegistrationEmployerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationEmployerNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEmployerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
