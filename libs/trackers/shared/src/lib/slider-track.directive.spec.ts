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
import { TrackerFacade } from '@banx/trackers/state';

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
    time: 123456,
    element: 'Test id',
  });

  let pageObject: SliderTrackDirectivePo;
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

          MockModule(MatSelectModule),
          MockModule(MatFormFieldModule),
          MockModule(MatSliderModule),
        ],
        declarations: [SliderTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new SliderTrackDirectivePo(fixture);

    const mockDateNow = 123456;
    jest.spyOn<any, any>(Date, 'now').mockImplementation(() => mockDateNow);
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

    pageObject.onInput();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Change)))).once();
  });
});
