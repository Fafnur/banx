import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { BrandComponent } from './brand.component';
import { BrandComponentPo } from './brand.component.po';

describe('BrandComponent', () => {
  let pageObject: BrandComponentPo;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule, MockModule(MatIconModule), MockModule(NavigationSharedModule)],
      declarations: [BrandComponent],
      providers: [PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandComponent);
    pageObject = new BrandComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.link).toBeTruthy();
    expect(pageObject.logo).toBeTruthy();
  });
});
