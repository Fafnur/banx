import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from '@banx/core/environments/service';

@Component({
  selector: 'banx-ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  brand!: string;
  year!: number;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
    this.year = new Date().getFullYear();
  }
}
