import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@banx/core/navigation/shared';

import { FooterCompanyComponent } from './footer-company.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule],
  declarations: [FooterCompanyComponent],
  exports: [FooterCompanyComponent],
})
export class FooterCompanyModule {}
