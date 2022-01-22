import { NgModule } from '@angular/core';

import { RegistrationCardActionsComponent } from './components/registration-card-actions/registration-card-actions.component';
import { RegistrationCardActionsModule } from './components/registration-card-actions/registration-card-actions.module';
import { RegistrationCardContentComponent } from './components/registration-card-content/registration-card-content.component';
import { RegistrationCardContentModule } from './components/registration-card-content/registration-card-content.module';
import { RegistrationCardErrorsComponent } from './components/registration-card-errors/registration-card-errors.component';
import { RegistrationCardErrorsModule } from './components/registration-card-errors/registration-card-errors.module';
import { RegistrationCardTitleComponent } from './components/registration-card-title/registration-card-title.component';
import { RegistrationCardTitleModule } from './components/registration-card-title/registration-card-title.module';
import { RegistrationCardComponent } from './registration-card.component';

@NgModule({
  imports: [RegistrationCardActionsModule, RegistrationCardContentModule, RegistrationCardTitleModule, RegistrationCardErrorsModule],
  declarations: [RegistrationCardComponent],
  exports: [
    RegistrationCardComponent,
    RegistrationCardTitleComponent,
    RegistrationCardContentComponent,
    RegistrationCardActionsComponent,
    RegistrationCardErrorsComponent,
  ],
})
export class RegistrationCardModule {}
