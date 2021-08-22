import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AccordionModule } from '@banx/ui/accordion';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, AccordionModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
