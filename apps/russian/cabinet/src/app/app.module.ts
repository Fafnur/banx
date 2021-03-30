import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppLocaleModule } from './app-locale.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppLocaleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
