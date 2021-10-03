import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { AutocompleteTrackDirective } from './autocomplete-track.directive';
import { AutocompleteTrackDirectivePo } from './autocomplete-track.directive.po';

@Component({
  template: `<mat-form-field appearance="fill">
    <input
      type="text"
      automation-id="input"
      banxAutocompleteTrack
      matInput
      [trackId]="trackId"
      [formControl]="control"
      [matAutocomplete]="auto"
    />

    <mat-autocomplete
      #auto="matAutocomplete"
      automation-id="autocomplete"
      banxAutocompleteTrack
      [trackId]="trackId"
      [trackValue]="control?.value"
    >
      <mat-option *ngFor="let option of options" [value]="option.value">
        {{ option.label }}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>`,
})
class WrapperComponent {
  trackId = 'Test id';
  control = new FormControl('test');
  trackValue = this.control.value;

  options = [
    {
      value: 'test option value',
      label: 'test option label',
    },
  ];
}

describe('AutocompleteTrackDirective', () => {
  const getRecord = (type: TrackerEventType): TrackerEvent => ({
    type,
    value: 'test',
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
  });

  let pageObject: AutocompleteTrackDirectivePo;
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
          MockModule(MatAutocompleteModule),
        ],
        declarations: [AutocompleteTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new AutocompleteTrackDirectivePo(fixture);

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

  it('should track opened', () => {
    fixture.detectChanges();

    pageObject.onOpen();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Open)))).once();
  });

  it('should track close', () => {
    fixture.detectChanges();

    pageObject.onClosed();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Close)))).once();
  });

  it('should track change', () => {
    fixture.detectChanges();

    pageObject.onOptionSelected();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
