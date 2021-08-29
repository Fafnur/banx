import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { ContainerModule } from '@banx/ui/container';

import { SocialGroupsModule } from '../social-groups/social-groups.module';
import { FooterBrandModule } from './components/footer-brand/footer-brand.module';
import { FooterCompanyModule } from './components/footer-company/footer-company.module';
import { FooterPhoneModule } from './components/footer-phone/footer-phone.module';
import { FooterTopComponent } from './footer-top.component';
import { FooterTopComponentPo } from './footer-top.component.po';

describe('FooterTopComponent', () => {
  let pageObject: FooterTopComponentPo;
  let fixture: ComponentFixture<FooterTopComponent>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);

    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(ContainerModule),
        MockModule(FooterBrandModule),
        MockModule(FooterCompanyModule),
        MockModule(FooterPhoneModule),
        MockModule(SocialGroupsModule),
      ],
      declarations: [FooterTopComponent],
      providers: [providerOf(BreakpointObserver, breakpointObserverMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    fixture = TestBed.createComponent(FooterTopComponent);
    pageObject = new FooterTopComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.mobilePhone).toBeTruthy();
    expect(pageObject.socialGroups).toBeTruthy();
    expect(pageObject.brand).toBeFalsy();
  });

  it('should show desktop', () => {
    fixture.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.mobilePhone).toBeFalsy();
    expect(pageObject.socialGroups).toBeFalsy();
    expect(pageObject.brand).toBeTruthy();
    expect(pageObject.company).toBeTruthy();
    expect(pageObject.phone).toBeTruthy();
  });
});
