import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { RegistrationLayoutComponent } from './registration-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, GridModule, ContainerModule],
  declarations: [RegistrationLayoutComponent],
  exports: [RegistrationLayoutComponent],
})
export class RegistrationLayoutModule {}
