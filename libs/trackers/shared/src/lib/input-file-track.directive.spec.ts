import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { deepEqual, mock, verify } from 'ts-mockito';

import { providerOf } from '@banx/core/testing';
import { TrackerEvent, TrackerEventType } from '@banx/trackers/common';
import { TrackerFacade } from '@banx/trackers/state';

import { InputFileTrackDirective } from './input-file-track.directive';
import { InputFileTrackDirectivePo } from './input-file-track.directive.po';

@Component({
  template: `<input matInput type="file" automation-id="input-file" banxInputFileTrack trackValue="attach" [trackId]="id" />`,
})
class WrapperComponent {
  id = 'Test id';
}

describe('InputFileTrackDirective', () => {
  const getRecord = (type: TrackerEventType): TrackerEvent => ({ type, value: 'attach', time: 123456, element: 'Test id' });

  let pageObject: InputFileTrackDirectivePo;
  let fixture: ComponentFixture<WrapperComponent>;
  let trackerFacadeMock: TrackerFacade;

  beforeEach(() => {
    trackerFacadeMock = mock(TrackerFacade);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MockModule(MatInputModule)],
        declarations: [InputFileTrackDirective, WrapperComponent],
        providers: [providerOf(TrackerFacade, trackerFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new InputFileTrackDirectivePo(fixture);

    const mockDateNow = 123456;
    jest.spyOn<any, any>(Date, 'now').mockImplementation(() => mockDateNow);
  });

  it('should track click', () => {
    fixture.detectChanges();

    pageObject.onChange();

    verify(trackerFacadeMock.add(deepEqual(getRecord(TrackerEventType.Click)))).once();
  });
});
