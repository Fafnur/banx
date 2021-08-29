import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { MENU_STUB } from '@banx/core/menu/common';
import { providerOf } from '@banx/core/testing';
import { ContainerModule } from '@banx/ui/container';
import { NavModule } from '@banx/ui/nav';

import { TopMenuComponent } from './top-menu.component';
import { TopMenuComponentPo } from './top-menu.component.po';

describe('TopMenuComponent', () => {
  let pageObject: TopMenuComponentPo;
  let fixture: ComponentFixture<TopMenuComponent>;
  let activatedRouteMock: ActivatedRoute;

  beforeEach(() => {
    activatedRouteMock = mock(ActivatedRoute);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ContainerModule), MockModule(NavModule)],
      declarations: [TopMenuComponent],
      providers: [providerOf(ActivatedRoute, activatedRouteMock), MENU_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    when(activatedRouteMock.snapshot).thenReturn({ data: {} } as any);

    fixture = TestBed.createComponent(TopMenuComponent);
    pageObject = new TopMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.nav).toBeTruthy();
  });
});
