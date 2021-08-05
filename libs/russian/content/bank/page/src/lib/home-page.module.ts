import { NgModule } from '@angular/core';

import { ContainerModule } from '@banx/ui/container';
import { GridModule } from '@banx/ui/grid';

import { HomeInfoModule } from './components/home-info/home-info.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [HomePageRoutingModule, ContainerModule, GridModule, HomeInfoModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
