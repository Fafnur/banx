import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app-core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppCoreModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
