import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDataPageComponent } from './registration-data-page.component';

describe('RegistrationDataPageComponent', () => {
  let component: RegistrationDataPageComponent;
  let fixture: ComponentFixture<RegistrationDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDataPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
