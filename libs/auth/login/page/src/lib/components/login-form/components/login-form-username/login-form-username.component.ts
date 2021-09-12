import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@banx/core/forms/utils';

@Component({
  selector: 'banx-auth-login-form-username',
  templateUrl: './login-form-username.component.html',
  styleUrls: ['./login-form-username.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUsernameComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    extractTouchedChanges(this.control)
      .pipe(
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
