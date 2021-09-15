import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { NavModule } from '@banx/ui/nav';

import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, NavModule, MatMenuModule, MatButtonModule, MatIconModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
