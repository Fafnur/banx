import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiLayoutComponent } from './components/ui-layout/ui-layout.component';
import { UiMainComponent } from './components/ui-main/ui-main.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, ContainerModule],
  declarations: [UiLayoutComponent, UiHeaderComponent, UiFooterComponent, UiMainComponent],
  exports: [UiLayoutComponent],
})
export class UiLayoutModule {}
