import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GridBreakpointType, GridService } from '@banx/ui/grid';

@Component({
  selector: 'banx-registration-layout',
  templateUrl: './registration-layout.component.html',
  styleUrls: ['./registration-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationLayoutComponent implements OnInit {
  isDesktopScreen$!: Observable<boolean>;

  constructor(private readonly gridService: GridService) {}

  ngOnInit(): void {
    this.isDesktopScreen$ = this.gridService.up(GridBreakpointType.Md);
  }
}
