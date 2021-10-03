import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { DatepickerTrackDirective } from './datepicker-track.directive';
import { DatepickerTrackDirectivePo } from './datepicker-track.directive.po';

@Component({
  template: `<mat-form-field appearance="fill">
    <input matInput [matDatepicker]="picker" />
    <mat-datepicker
      #picker
      automation-id="datepicker"
      banxDatepickerTrack
      [trackId]="trackId"
      [trackValue]="control?.value"
    ></mat-datepicker>
  </mat-form-field>`,
})
class WrapperComponent {
  trackId = 'Test id';
  control = new FormControl('1990-01-01');
}

describe('DatepickerTrackDirective', () => {
  const getRecord = (type: TrackerEventType, value: string = '1990-01-01'): TrackerEvent => ({
    type,
    value,
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
  });

  let pageObject: DatepickerTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerFacadeMock: TrackerFacade;

  beforeEach(() => {
    trackerFacadeMock = mock(TrackerFacade);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          NoopAnimationsModule,
          ReactiveFormsModule,

          MockModule(MatInputModule),
          MockModule(MatFormFieldModule),
          MockModule(MatDatepickerModule),
          MockModule(MatNativeDateModule),
        ],
        declarations: [DatepickerTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new DatepickerTrackDirectivePo(fixture);

    const mockDateNow = new Date(1633244759814);
    jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDateNow);
  });

  it('should track opened', () => {
    fixture.detectChanges();

    pageObject.onOpened();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Open)))).once();
  });

  it('should track closed', () => {
    fixture.detectChanges();

    pageObject.onClosed();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Close)))).once();
  });

  it('should track opened', () => {
    fixture.detectChanges();

    pageObject.onDateChange();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
