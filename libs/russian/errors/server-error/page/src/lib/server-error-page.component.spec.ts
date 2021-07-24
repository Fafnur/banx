import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { ServerErrorPageComponent } from './server-error-page.component';
import { ServerErrorPageComponentPo } from './server-error-page.component.po';

describe('ServerErrorPageComponent', () => {
  let pageObject: ServerErrorPageComponentPo;
  let fixture: ComponentFixture<ServerErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ErrorsSharedModule)],
      declarations: [ServerErrorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorPageComponent);
    pageObject = new ServerErrorPageComponentPo(fixture);
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
    expect(pageObject.hintNext).toBeTruthy();
    expect(pageObject.links).toBeTruthy();
    expect(pageObject.app).toBeTruthy();
  });
});
