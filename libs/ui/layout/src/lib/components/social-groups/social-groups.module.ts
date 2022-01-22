import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SocialSharedModule } from '@banx/core/social/shared';

import { SocialGroupsComponent } from './social-groups.component';

@NgModule({
  imports: [CommonModule, SocialSharedModule, RouterModule, MatIconModule, MatButtonModule],
  declarations: [SocialGroupsComponent],
  exports: [SocialGroupsComponent],
})
export class SocialGroupsModule {}
