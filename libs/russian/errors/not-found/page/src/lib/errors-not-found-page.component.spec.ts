import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ErrorsSharedModule } from '@banx/russian/errors/shared';

import { ErrorsNotFoundPageComponent } from './errors-not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: ErrorsNotFoundPageComponent;
  let fixture: ComponentFixture<ErrorsNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ErrorsSharedModule)],
      declarations: [ErrorsNotFoundPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
