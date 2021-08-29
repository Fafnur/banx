import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterPhoneComponent } from './footer-phone.component';
import { FooterPhoneComponentPo } from './footer-phone.component.po';

describe('FooterPhoneComponent', () => {
  let pageObject: FooterPhoneComponentPo;
  let fixture: ComponentFixture<FooterPhoneComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [FooterPhoneComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPhoneComponent);
    pageObject = new FooterPhoneComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.phone).toBeTruthy();
    expect(pageObject.hint).toBeTruthy();
  });
});
