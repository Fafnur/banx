import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { ContentHomePageComponent } from './content-home-page.component';
import { ContentHomePageRoutingModule } from './content-home-page-routing.module';

@NgModule({
  imports: [ContentHomePageRoutingModule, ContainerModule, GridModule],
  declarations: [ContentHomePageComponent],
})
export class ContentHomePageModule {}
