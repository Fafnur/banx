import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { PermissionDeniedPageComponent } from './permission-denied-page.component';
import { PermissionDeniedPageComponentPo } from './permission-denied-page.component.po';

describe('PermissionDeniedPageComponent', () => {
  let pageObject: PermissionDeniedPageComponentPo;
  let fixture: ComponentFixture<PermissionDeniedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ErrorsSharedModule)],
      declarations: [PermissionDeniedPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDeniedPageComponent);
    pageObject = new PermissionDeniedPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show page', () => {
    fixture.detectChanges();

    expect(pageObject.logo).toBeTruthy();
    expect(pageObject.status).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.hint).toBeTruthy();
    expect(pageObject.links).toBeTruthy();
    expect(pageObject.app).toBeTruthy();
  });
});
