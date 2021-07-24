import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ErrorLinksComponent } from './error-links.component';
import { ErrorLinksComponentPo } from './error-links.component.po';

describe('ErrorLinksComponent', () => {
  let pageObject: ErrorLinksComponentPo;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ErrorLinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLinksComponent);
    pageObject = new ErrorLinksComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show links', () => {
    fixture.detectChanges();

    expect(pageObject.links).toBeTruthy();
    expect(pageObject.home).toBeTruthy();
    expect(pageObject.creditCardText).toBe('Credit cards');
    expect(pageObject.creditCardLink).toBe('/services/credit-card');
    expect(pageObject.debitCardText).toBe('Debit cards');
    expect(pageObject.debitCardLink).toBe('/services/debit-card');
    expect(pageObject.depositText).toBe('Deposits');
    expect(pageObject.depositLink).toBe('/services/deposits');
  });
});
