import { NgModule } from '@angular/core';

import { GridModule } from '@banx/russian/ui/grid';
import { ContainerModule } from '@banx/ui/container';

import { ContentHomePageComponent } from './content-home-page.component';
import { ContentHomePageRoutingModule } from './content-home-page-routing.module';

@NgModule({
  imports: [ContentHomePageRoutingModule, ContainerModule, GridModule],
  declarations: [ContentHomePageComponent],
})
export class ContentHomePageModule {}
