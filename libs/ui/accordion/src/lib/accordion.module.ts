import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, CdkAccordionModule, MatIconModule],
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
})
export class AccordionModule {}
