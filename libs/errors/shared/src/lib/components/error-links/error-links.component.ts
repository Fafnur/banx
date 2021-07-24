import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';

@Component({
  selector: 'banx-error-links',
  templateUrl: './error-links.component.html',
  styleUrls: ['./error-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLinksComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
