import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTopComponent } from './footer-top.component';

describe('FooterTopComponent', () => {
  let component: FooterTopComponent;
  let fixture: ComponentFixture<FooterTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
