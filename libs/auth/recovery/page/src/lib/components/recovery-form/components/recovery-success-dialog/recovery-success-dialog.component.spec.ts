import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MockModule } from 'ng-mocks';

import { TrackersSharedModule } from '@banx/trackers/shared';

import { RecoverySuccessDialogComponent } from './recovery-success-dialog.component';
import { RecoverySuccessDialogComponentPo } from './recovery-success-dialog.component.po';

describe('RecoverySuccessDialogComponent', () => {
  let pageObject: RecoverySuccessDialogComponentPo;
  let fixture: ComponentFixture<RecoverySuccessDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MockModule(TrackersSharedModule)],
        declarations: [RecoverySuccessDialogComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: '123456789',
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverySuccessDialogComponent);
    pageObject = new RecoverySuccessDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.titleText).toBe('The password was reset');
    expect(pageObject.contentText).toBe('We sent an SMS with a new password on 123456789.');
    expect(pageObject.closeText).toBe('Close');
  });
});
