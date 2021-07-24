import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { BrandModule } from './components/brand/brand.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, ContainerModule, BrandModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
