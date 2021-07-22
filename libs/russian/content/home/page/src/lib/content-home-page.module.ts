import { NgModule } from '@angular/core';

import { UiContainerModule } from '@banx/russian/ui/container';
import { GridModule } from '@banx/russian/ui/grid';

import { ContentHomePageComponent } from './content-home-page.component';
import { ContentHomePageRoutingModule } from './content-home-page-routing.module';

@NgModule({
  imports: [ContentHomePageRoutingModule, UiContainerModule, GridModule],
  declarations: [ContentHomePageComponent],
})
export class ContentHomePageModule {}
