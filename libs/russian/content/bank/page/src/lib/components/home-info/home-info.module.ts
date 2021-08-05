import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { HomeInfoComponent } from './home-info.component';

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule],
  declarations: [HomeInfoComponent],
  exports: [HomeInfoComponent],
})
export class HomeInfoModule {}
