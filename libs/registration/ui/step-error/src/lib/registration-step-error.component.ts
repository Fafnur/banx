import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';

@Component({
  selector: 'banx-registration-step-error',
  templateUrl: './registration-step-error.component.html',
  styleUrls: ['./registration-step-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationStepErrorComponent {
  constructor(@Inject(PATHS) public paths: NavigationPaths) {}
}
