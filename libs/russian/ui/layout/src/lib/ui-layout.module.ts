import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiLayoutComponent } from './components/ui-layout/ui-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiLayoutComponent],
  exports: [UiLayoutComponent],
})
export class UiLayoutModule {}
