import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';
import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-error-logo',
  templateUrl: './error-logo.component.html',
  styleUrls: ['./error-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogoComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
