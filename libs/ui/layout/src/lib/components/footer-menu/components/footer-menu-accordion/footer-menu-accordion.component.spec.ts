import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuAccordionComponent } from './footer-menu-accordion.component';

describe('FooterMenuAccordionComponent', () => {
  let component: FooterMenuAccordionComponent;
  let fixture: ComponentFixture<FooterMenuAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMenuAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMenuAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
