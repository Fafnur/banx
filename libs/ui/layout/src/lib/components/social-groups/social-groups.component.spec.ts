import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { SOCIAL_GROUPS, SocialGroup, SocialType } from '@banx/core/social/common';
import { SocialSharedModule } from '@banx/core/social/shared';

import { SocialGroupsComponent } from './social-groups.component';
import { SocialGroupsComponentPo } from './social-groups.component.po';

describe('SocialGroupsComponent', () => {
  let pageObject: SocialGroupsComponentPo;
  let fixture: ComponentFixture<SocialGroupsComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NoopAnimationsModule,
          MockModule(SocialSharedModule),
          MockModule(MatIconModule),
          MockModule(MatButtonModule),
        ],
        declarations: [SocialGroupsComponent],
        providers: [
          {
            provide: SOCIAL_GROUPS,
            useValue: [
              {
                type: SocialType.Google,
                link: '//fa',
              },
            ] as SocialGroup[],
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialGroupsComponent);
    pageObject = new SocialGroupsComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.groups).toBeTruthy();
    expect(pageObject.groupAll.length).toBe(1);
  });
});
