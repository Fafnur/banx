import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';

@Component({
  selector: 'banx-ui-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
