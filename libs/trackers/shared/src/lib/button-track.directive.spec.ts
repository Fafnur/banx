import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { ButtonTrackDirective } from './button-track.directive';
import { ButtonTrackDirectivePo } from './button-track.directive.po';

@Component({
  template: `<button automation-id="button" banxButtonTrack [trackId]="id" [trackValue]="trackerValue"></button>`,
})
class WrapperComponent {
  id = 'Test id';
  trackerValue = 'test';
}

describe('ButtonTrackDirective', () => {
  const getRecord = (type: TrackerEventType): TrackerEvent => ({
    type,
    value: 'test',
    time: '2021-10-03T07:05:59.814Z',
    element: 'Test id',
  });

  let pageObject: ButtonTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerFacadeMock: TrackerFacade;

  beforeEach(() => {
    trackerFacadeMock = mock(TrackerFacade);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [ButtonTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new ButtonTrackDirectivePo(fixture);

    const mockDateNow = new Date(1633244759814);
    jest.spyOn<any, any>(global, 'Date').mockImplementation(() => mockDateNow);
  });

  it('should track click with trackValue', () => {
    fixture.detectChanges();

    pageObject.onClick();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Click)))).once();
  });
});
