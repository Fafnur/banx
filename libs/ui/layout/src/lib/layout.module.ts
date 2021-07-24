import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { CopyrightComponent } from './components/copyright/copyright.component';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ContainerModule,
    FooterModule,
    HeaderModule,
    MainModule,
    CopyrightModule,
    ToolbarModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, CopyrightComponent, ToolbarComponent],
})
export class LayoutModule {}
