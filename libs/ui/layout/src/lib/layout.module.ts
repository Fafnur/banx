import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@banx/ui/container';

import { FooterModule } from './components/footer/footer.module';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom.component';
import { FooterBottomModule } from './components/footer-bottom/footer-bottom.module';
import { FooterMenuModule } from './components/footer-menu/footer-menu.module';
import { FooterTopModule } from './components/footer-top/footer-top.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { TopMenuModule } from './components/top-menu/top-menu.module';
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
    FooterTopModule,
    FooterMenuModule,
    FooterBottomModule,
    ToolbarModule,
    TopMenuModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, FooterBottomComponent, ToolbarComponent],
})
export class LayoutModule {}
