import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AccordionModule } from '@banx/ui/accordion';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  imports: [MatButtonModule, MatIconModule, AccordionModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
