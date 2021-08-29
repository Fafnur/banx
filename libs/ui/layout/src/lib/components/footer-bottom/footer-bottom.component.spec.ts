import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@banx/ui/container';

import { SocialGroupsModule } from '../social-groups/social-groups.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { LocaleSwitcherModule } from './components/locale-switcher/locale-switcher.module';
import { FooterBottomComponent } from './footer-bottom.component';
import { FooterBottomComponentPo } from './footer-bottom.component.po';

describe('FooterBottomComponent', () => {
  let pageObject: FooterBottomComponentPo;
  let fixture: ComponentFixture<FooterBottomComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          MockModule(ContainerModule),
          MockModule(CopyrightModule),
          MockModule(SocialGroupsModule),
          MockModule(LocaleSwitcherModule),
        ],
        declarations: [FooterBottomComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBottomComponent);
    pageObject = new FooterBottomComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.container).toBeTruthy();
    expect(pageObject.copyright).toBeTruthy();
    expect(pageObject.socialGroups).toBeTruthy();
    expect(pageObject.localeSwitcher).toBeTruthy();
  });
});
