import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import { RadioTrackDirective } from './radio-track.directive';
import { RadioTrackDirectivePo } from './radio-track.directive.po';

@Component({
  template: ` <mat-radio-group [formControl]="control">
    <mat-radio-button automation-id="radio-yes" banxRadioTrack trackId="yes" [trackValue]="control.value" value="1">Yes</mat-radio-button>
    <mat-radio-button automation-id="radio-no" banxRadioTrack trackId="no" [trackValue]="control.value" value="0">No</mat-radio-button>
  </mat-radio-group>`,
})
class WrapperComponent {
  control = new FormControl('');
}

describe('RadioTrackDirective', () => {
  const getRecord = (type: TrackerEventType, value: string = ''): TrackerEvent => ({
    type,
    value,
    time: '2021-10-03T07:05:59.814Z',
    element: 'yes',
  });

  let pageObject: RadioTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerServiceMock: TrackerService;

  beforeEach(() => {
    trackerServiceMock = mock(TrackerService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MockModule(MatRadioModule)],
        declarations: [RadioTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerService, trackerServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RadioTrackDirectivePo(fixture);

    const mockDateNow = new Date(1633244759814);
    jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDateNow);
  });

  it('should track focus', () => {
    fixture.detectChanges();

    pageObject.onFocus();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Focus)))).once();
  });

  it('should track blur', () => {
    fixture.detectChanges();

    pageObject.onBlur();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Blur)))).once();
  });

  it('should track change', () => {
    fixture.detectChanges();

    pageObject.onChange();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Change, '1')))).once();
  });
});
