import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import { SelectTrackDirective } from './select-track.directive';
import { SelectTrackDirectivePo } from './select-track.directive.po';

@Component({
  template: `<mat-form-field appearance="fill">
    <mat-label>Test select</mat-label>
    <mat-select automation-id="select" banxSelectTrack [formControl]="control" [trackId]="trackId">
      <mat-option *ngFor="let option of options" [value]="option">
        {{ option }}
      </mat-option>
    </mat-select>
  </mat-form-field>`,
})
class WrapperComponent {
  trackId = 'Test id';
  control = new FormControl('Second item');

  options = ['First item', 'Second item', 'Third item'];
}

describe('SelectTrackDirective', () => {
  const getRecord = (type: TrackerEventType, value: string = 'Second item'): TrackerEvent => ({
    type,
    value,
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
  });

  let pageObject: SelectTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerServiceMock: TrackerService;

  beforeEach(() => {
    trackerServiceMock = mock(TrackerService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MockModule(MatSelectModule), MockModule(MatFormFieldModule)],
        declarations: [SelectTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerService, trackerServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new SelectTrackDirectivePo(fixture);

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

  it('should track opened', () => {
    fixture.detectChanges();

    pageObject.onOpened();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Open)))).once();
  });

  it('should track closed', () => {
    fixture.detectChanges();

    pageObject.onClosed();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Close)))).once();
  });

  it('should track selection', () => {
    fixture.detectChanges();

    pageObject.onSelectionChange();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
