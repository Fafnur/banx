import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { MENU, MenuLink } from '@banx/core/menu/common';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { GridBreakpointType, mediaBreakpointUp } from '@banx/ui/grid';

@Component({
  selector: 'banx-ui-copyright',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMenuComponent implements OnInit, OnDestroy {
  links!: MenuLink[];
  companyLinks!: MenuLink | null;
  isDesktopScreen = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
    @Inject(MENU) private readonly menuLinks: MenuLink[]
  ) {}

  ngOnInit(): void {
    this.links = this.menuLinks;
    this.companyLinks = this.menuLinks.find((link) => link.route === NAVIGATION_PATHS.company) ?? null;

    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;
          this.links = this.isDesktopScreen ? this.menuLinks.filter((link) => !link.hide) : this.menuLinks;

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
