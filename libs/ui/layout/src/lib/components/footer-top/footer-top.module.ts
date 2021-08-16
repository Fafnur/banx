import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';

import { FooterBrandModule } from './components/footer-brand/footer-brand.module';
import { FooterCompanyModule } from './components/footer-company/footer-company.module';
import { FooterPhoneModule } from './components/footer-phone/footer-phone.module';
import { FooterTopComponent } from './footer-top.component';

@NgModule({
  imports: [CommonModule, ContainerModule, FooterBrandModule, FooterCompanyModule, FooterPhoneModule],
  declarations: [FooterTopComponent],
  exports: [FooterTopComponent],
})
export class FooterTopModule {}
