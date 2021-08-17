import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from '@banx/core/environments/service';
import { MENU, MENU_DEFAULT } from '@banx/core/menu/common';
import { PATHS } from '@banx/core/navigation/common';
import { RootStoreModule } from '@banx/core/store/root';
import { LocalizationModule } from '@banx/russian/localization';
import { RUSSIAN_NAVIGATION_PATHS } from '@banx/russian/navigation/common';
import { LayoutModule } from '@banx/ui/layout';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    LayoutModule,
    LocalizationModule,
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: PATHS,
      useValue: RUSSIAN_NAVIGATION_PATHS,
    },
    {
      provide: MENU,
      useValue: MENU_DEFAULT,
    },
  ],
})
export class AppCoreModule {}
