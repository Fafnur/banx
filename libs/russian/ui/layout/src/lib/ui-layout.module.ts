import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiLayoutComponent } from './components/ui-layout/ui-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UiLayoutComponent],
  exports: [UiLayoutComponent],
})
export class UiLayoutModule {}
