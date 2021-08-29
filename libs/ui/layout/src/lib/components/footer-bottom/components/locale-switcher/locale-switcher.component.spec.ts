import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { IconsModule } from '@banx/ui/icons';

import { LocaleSwitcherComponent } from './locale-switcher.component';
import { LocaleSwitcherComponentPo } from './locale-switcher.component.po';

describe('LocaleSwitcherComponent', () => {
  let pageObject: LocaleSwitcherComponentPo;
  let fixture: ComponentFixture<LocaleSwitcherComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(IconsModule)],
        declarations: [LocaleSwitcherComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSwitcherComponent);
    pageObject = new LocaleSwitcherComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.link).toBeTruthy();
    expect(pageObject.name).toBe('English');
    expect(pageObject.icon).toBeTruthy();
  });
});
