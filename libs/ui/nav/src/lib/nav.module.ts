import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
