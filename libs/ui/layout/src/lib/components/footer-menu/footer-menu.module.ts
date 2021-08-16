import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { FooterMenuAccordionModule } from './components/footer-menu-accordion/footer-menu-accordion.module';
import { FooterMenuListModule } from './components/footer-menu-list/footer-menu-list.module';
import { FooterMenuComponent } from './footer-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    GridModule,
    RouterModule,
    NavigationSharedModule,
    CdkAccordionModule,
    FooterMenuListModule,
    FooterMenuAccordionModule,
  ],
  declarations: [FooterMenuComponent],
  exports: [FooterMenuComponent],
})
export class FooterMenuModule {}
