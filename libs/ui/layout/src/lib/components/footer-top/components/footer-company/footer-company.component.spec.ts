import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCompanyComponent } from './footer-company.component';

describe('FooterCompanyComponent', () => {
  let component: FooterCompanyComponent;
  let fixture: ComponentFixture<FooterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
