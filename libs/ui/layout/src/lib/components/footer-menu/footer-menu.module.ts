import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { FooterMenuComponent } from './footer-menu.component';

@NgModule({
  imports: [CommonModule, ContainerModule, GridModule, RouterModule, NavigationSharedModule, CdkAccordionModule],
  declarations: [FooterMenuComponent],
  exports: [FooterMenuComponent],
})
export class FooterMenuModule {}
