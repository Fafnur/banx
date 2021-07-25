import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';
import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-error-links',
  templateUrl: './error-links.component.html',
  styleUrls: ['./error-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLinksComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
