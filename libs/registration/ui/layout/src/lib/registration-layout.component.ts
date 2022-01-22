import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegistrationProcessFacade } from '@banx/registration/process/state';
import { GridBreakpointType, GridService } from '@banx/ui/grid';

@Component({
  selector: 'banx-registration-layout',
  templateUrl: './registration-layout.component.html',
  styleUrls: ['./registration-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationLayoutComponent implements OnInit {
  isDesktopScreen$!: Observable<boolean>;

  constructor(private readonly gridService: GridService, private readonly registrationProcessFacade: RegistrationProcessFacade) {}

  ngOnInit(): void {
    this.isDesktopScreen$ = this.gridService.up(GridBreakpointType.Md);
    this.registrationProcessFacade.selectStep();
  }
}
