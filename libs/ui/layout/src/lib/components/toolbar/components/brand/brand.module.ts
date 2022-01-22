import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { BrandComponent } from './brand.component';

@NgModule({
  imports: [RouterModule, NavigationSharedModule, MatIconModule],
  declarations: [BrandComponent],
  exports: [BrandComponent],
})
export class BrandModule {}
