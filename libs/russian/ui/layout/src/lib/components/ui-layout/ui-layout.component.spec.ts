import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLayoutComponent } from './ui-layout.component';

describe('UiLayoutComponent', () => {
  let component: UiLayoutComponent;
  let fixture: ComponentFixture<UiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
