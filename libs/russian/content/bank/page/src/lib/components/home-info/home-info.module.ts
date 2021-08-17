import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';

import { HomeInfoComponent } from './home-info.component';

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule, NavigationSharedModule],
  declarations: [HomeInfoComponent],
  exports: [HomeInfoComponent],
})
export class HomeInfoModule {}
