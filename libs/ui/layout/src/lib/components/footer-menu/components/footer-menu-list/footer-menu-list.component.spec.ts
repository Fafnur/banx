import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuListComponent } from './footer-menu-list.component';

describe('FooterMenuListComponent', () => {
  let component: FooterMenuListComponent;
  let fixture: ComponentFixture<FooterMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
