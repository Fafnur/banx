import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorHintComponent } from './error-hint.component';

describe('ErrorHintComponent', () => {
  let component: ErrorHintComponent;
  let fixture: ComponentFixture<ErrorHintComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ErrorHintComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
