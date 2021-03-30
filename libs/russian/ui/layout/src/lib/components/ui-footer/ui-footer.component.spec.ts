import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFooterComponent } from './ui-footer.component';

describe('UiFooterComponent', () => {
  let component: UiFooterComponent;
  let fixture: ComponentFixture<UiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
