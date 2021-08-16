import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBrandComponent } from './footer-brand.component';

describe('FooterBrandComponent', () => {
  let component: FooterBrandComponent;
  let fixture: ComponentFixture<FooterBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBrandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
