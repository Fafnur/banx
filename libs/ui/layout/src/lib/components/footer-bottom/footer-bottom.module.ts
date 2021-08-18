import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';

import { SocialGroupsModule } from '../social-groups/social-groups.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FooterBottomComponent } from './footer-bottom.component';

@NgModule({
  imports: [CommonModule, ContainerModule, CopyrightModule, SocialGroupsModule],
  declarations: [FooterBottomComponent],
  exports: [FooterBottomComponent],
})
export class FooterBottomModule {}
