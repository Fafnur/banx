import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';
import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-auth-recovery-page',
  templateUrl: './recovery-page.component.html',
  styleUrls: ['./recovery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryPageComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService, @Optional() @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
