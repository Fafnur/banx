import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { GridBreakpointType, mediaBreakpointUp } from '@banx/ui/grid';

@Component({
  selector: 'banx-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTopComponent implements OnInit, OnDestroy {
  isDesktopScreen = false;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;

          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
