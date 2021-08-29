import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccordionModule } from '@banx/ui/accordion';
import { ContainerModule } from '@banx/ui/container';

import { FooterMenuListModule } from './components/footer-menu-list/footer-menu-list.module';
import { FooterMenuComponent } from './footer-menu.component';

@NgModule({
  imports: [CommonModule, ContainerModule, RouterModule, FooterMenuListModule, AccordionModule],
  declarations: [FooterMenuComponent],
  exports: [FooterMenuComponent],
})
export class FooterMenuModule {}
