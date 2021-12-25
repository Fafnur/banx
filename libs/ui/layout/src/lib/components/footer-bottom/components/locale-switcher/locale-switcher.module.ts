import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { LocaleSwitcherComponent } from './locale-switcher.component';

@NgModule({
  imports: [CommonModule, MatIconModule, RouterModule],
  declarations: [LocaleSwitcherComponent],
  exports: [LocaleSwitcherComponent],
})
export class LocaleSwitcherModule {}
