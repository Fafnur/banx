import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';
import { PATHS } from '@banx/core/navigation/common';
import { RussianNavigationPaths } from '@banx/russian/navigation/common';

@Component({
  selector: 'banx-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoComponent implements OnInit {
  brand!: string;

  constructor(@Inject(PATHS) public readonly paths: RussianNavigationPaths, private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
