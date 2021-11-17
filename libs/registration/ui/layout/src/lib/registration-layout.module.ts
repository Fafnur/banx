import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridModule } from '@banx/ui/grid';

import { RegistrationLayoutComponent } from './registration-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, GridModule],
  declarations: [RegistrationLayoutComponent],
  exports: [RegistrationLayoutComponent],
})
export class RegistrationLayoutModule {}
