import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCardContentComponent } from './registration-card-content.component';

describe('RegistrationCardContentComponent', () => {
  let component: RegistrationCardContentComponent;
  let fixture: ComponentFixture<RegistrationCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
