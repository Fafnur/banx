import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { CheckboxTrackDirective } from './checkbox-track.directive';
import { CheckboxTrackDirectivePo } from './checkbox-track.directive.po';

@Component({
  template: `<mat-checkbox automation-id="checkbox" banxCheckboxTrack [formControl]="control" [trackId]="id">test</mat-checkbox>`,
})
class WrapperComponent {
  id = 'Test id';
  control = new FormControl('test');
}

describe('CheckboxTrackDirective', () => {
  const getRecord = (type: TrackerEventType): TrackerEvent => ({ type, value: '1', time: '2021-10-03T07:05:59.814Z', element: 'Test id' });

  let pageObject: CheckboxTrackDirectivePo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let trackerFacadeMock: TrackerFacade;

  beforeEach(() => {
    trackerFacadeMock = mock(TrackerFacade);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MockModule(MatCheckboxModule)],
        declarations: [CheckboxTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CheckboxTrackDirectivePo(fixtureWrapper);

    const mockDateNow = new Date(1633244759814);
    jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDateNow);
  });

  it('should track focus', () => {
    fixtureWrapper.detectChanges();

    pageObject.onFocus();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Focus)))).once();
  });

  it('should track blur', () => {
    fixtureWrapper.detectChanges();

    pageObject.onBlur();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Blur)))).once();
  });

  it('should track change', () => {
    fixtureWrapper.detectChanges();

    pageObject.onChange();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
