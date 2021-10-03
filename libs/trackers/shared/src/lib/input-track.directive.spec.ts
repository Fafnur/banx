import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { InputTrackDirective } from './input-track.directive';
import { InputTrackDirectivePo } from './input-track.directive.po';

@Component({
  template: `<input matInput automation-id="input" banxInputTrack [trackId]="id" [formControl]="control" />`,
})
class WrapperComponent {
  id = 'Test id';
  control = new FormControl('test');
}

describe('InputTrackDirective', () => {
  const getRecord = (type: TrackerEventType): TrackerEvent => ({
    type,
    value: 'test',
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
    keys: undefined,
  });

  let pageObject: InputTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerFacadeMock: TrackerFacade;

  beforeEach(() => {
    trackerFacadeMock = mock(TrackerFacade);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MockModule(MatInputModule)],
        declarations: [InputTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new InputTrackDirectivePo(fixture);

    const mockDateNow = new Date(1633244759814);
    jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDateNow);
  });

  it('should track focus', () => {
    fixture.detectChanges();

    pageObject.onFocus();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Focus)))).once();
  });

  it('should track blur', () => {
    fixture.detectChanges();

    pageObject.onBlur();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Blur)))).once();
  });

  it('should track press', () => {
    fixture.detectChanges();

    pageObject.onInput({ key: 'Delete' });

    verify(
      trackerFacadeMock.add(
        deepEqual({
          type: TrackerEventType.Press,
          keys: 'Delete',
          value: 'test',
          time: '2021-10-03T07:05:59.814Z',
          element: 'Test id',
        })
      )
    ).once();
  });

  it('should track change', () => {
    fixture.detectChanges();

    pageObject.onInput({ key: 'a' });

    verify(
      trackerFacadeMock.add(
        deepEqual({
          type: TrackerEventType.Change,
          keys: 'a',
          value: 'test',
          time: '2021-10-03T07:05:59.814Z',
          element: 'Test id',
        })
      )
    ).once();
  });
});
