import { NgModule } from '@angular/core';

import { UiContainerModule } from '@banx/russian/ui/container';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ContentHomePageRoutingModule } from './content-home-page-routing.module';

@NgModule({
  imports: [ContentHomePageRoutingModule, UiContainerModule],
  declarations: [HomePageComponent],
})
export class ContentHomePageModule {}
