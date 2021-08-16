import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';
import { GridModule } from '@banx/ui/grid';

import { FooterMenuListComponent } from './footer-menu-list.component';

@NgModule({
  imports: [CommonModule, GridModule, RouterModule, NavigationSharedModule],
  declarations: [FooterMenuListComponent],
  exports: [FooterMenuListComponent],
})
export class FooterMenuListModule {}
