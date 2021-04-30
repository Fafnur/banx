import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ENVIRONMENTS } from '@banx/core/environments/service';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppLocaleModule } from './app-locale.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppLocaleModule, AppRoutingModule],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
