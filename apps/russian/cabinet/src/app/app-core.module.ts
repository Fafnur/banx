import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from '@banx/core/environments/service';
import { RootStoreModule } from '@banx/core/store/root';

import { environment } from '../environments/environment';

@NgModule({
  imports: [RootStoreModule, !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
  ],
})
export class AppCoreModule {}
