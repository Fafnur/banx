import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerService } from '@banx/trackers/service';

import { SliderTrackDirective } from './slider-track.directive';
import { SliderTrackDirectivePo } from './slider-track.directive.po';

@Component({
  template: `<mat-slider automation-id="slider" banxSliderTrack [trackId]="trackId" [formControl]="control"></mat-slider>`,
})
class WrapperComponent {
  trackId = 'Test id';
  control = new FormControl('1');
}

describe('SliderTrackDirective', () => {
  const getRecord = (type: TrackerEventType, value: string = '1'): TrackerEvent => ({
    type,
    value,
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
  });

  let pageObject: SliderTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerServiceMock: TrackerService;

  beforeEach(() => {
    trackerServiceMock = mock(TrackerService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          NoopAnimationsModule,
          ReactiveFormsModule,

          MockModule(MatSelectModule),
          MockModule(MatFormFieldModule),
          MockModule(MatSliderModule),
        ],
        declarations: [SliderTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerService, trackerServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new SliderTrackDirectivePo(fixture);

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

    pageObject.onInput();

    verify(trackerServiceMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
