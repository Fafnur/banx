import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { BrandModule } from '../toolbar/components/brand/brand.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, MatIconModule, ContainerModule, BrandModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
