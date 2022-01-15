import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Component({
  selector: 'banx-registration-restart-page',
  templateUrl: './registration-restart-page.component.html',
  styleUrls: ['./registration-restart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationRestartPageComponent {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  onRestart(): void {
    this.registrationProcessFacade.restart();
    void this.navigationService.navigateByUrl(this.navigationService.getPaths().registrationFormPersonal);
  }
}
