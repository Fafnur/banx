import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';

@Component({
  selector: 'banx-error-application',
  templateUrl: './error-application.component.html',
  styleUrls: ['./error-application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorApplicationComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
