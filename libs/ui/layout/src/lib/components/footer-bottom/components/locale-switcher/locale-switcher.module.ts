import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconsModule } from '@banx/ui/icons';

import { LocaleSwitcherComponent } from './locale-switcher.component';

@NgModule({
  imports: [CommonModule, IconsModule, RouterModule],
  declarations: [LocaleSwitcherComponent],
  exports: [LocaleSwitcherComponent],
})
export class LocaleSwitcherModule {}
