import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCardTitleComponent } from './registration-card-title.component';

describe('RegistrationCardTitleComponent', () => {
  let component: RegistrationCardTitleComponent;
  let fixture: ComponentFixture<RegistrationCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationCardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
