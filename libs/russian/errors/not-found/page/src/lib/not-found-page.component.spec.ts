import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageComponentPo } from './not-found-page.component.po';

describe('NotFoundPageComponent', () => {
  let pageObject: NotFoundPageComponentPo;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ErrorsSharedModule)],
      declarations: [NotFoundPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    pageObject = new NotFoundPageComponentPo(fixture);
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
