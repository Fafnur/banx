import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { UiContainerModule } from '@banx/russian/ui/container';

import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiLayoutComponent } from './components/ui-layout/ui-layout.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { UiMainComponent } from './components/ui-main/ui-main.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, UiContainerModule],
  declarations: [UiLayoutComponent, UiHeaderComponent, UiFooterComponent, UiMainComponent],
  exports: [UiLayoutComponent],
})
export class UiLayoutModule {}
