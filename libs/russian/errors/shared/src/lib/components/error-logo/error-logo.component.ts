import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';

@Component({
  selector: 'banx-error-logo',
  templateUrl: './error-logo.component.html',
  styleUrls: ['./error-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogoComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
