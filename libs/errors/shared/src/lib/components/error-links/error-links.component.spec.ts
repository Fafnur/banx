import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NAVIGATION_PATHS, PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { ErrorLinksComponent } from './error-links.component';
import { ErrorLinksComponentPo } from './error-links.component.po';

describe('ErrorLinksComponent', () => {
  let pageObject: ErrorLinksComponentPo;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavigationSharedModule],
      declarations: [ErrorLinksComponent],
      providers: [PATHS_STUB],
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
    expect(pageObject.creditCardLink).toBe(`/${NAVIGATION_PATHS.bankCreditCards}`);
    expect(pageObject.debitCardText).toBe('Debit cards');
    expect(pageObject.debitCardLink).toBe(`/${NAVIGATION_PATHS.bankDebitCards}`);
    expect(pageObject.depositText).toBe('Deposits');
    expect(pageObject.depositLink).toBe(`/${NAVIGATION_PATHS.bankDeposits}`);
  });
});
