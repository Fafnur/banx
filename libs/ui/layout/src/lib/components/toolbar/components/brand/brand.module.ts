import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { IconsModule } from '@banx/ui/icons';

import { BrandComponent } from './brand.component';

@NgModule({
  imports: [RouterModule, NavigationSharedModule, IconsModule],
  declarations: [BrandComponent],
  exports: [BrandComponent],
})
export class BrandModule {}
