import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { UserLayoutComponent } from './user-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule],
  declarations: [UserLayoutComponent],
  exports: [UserLayoutComponent],
})
export class UserLayoutModule {}
