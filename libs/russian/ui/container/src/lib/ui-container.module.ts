import { NgModule } from '@angular/core';

import { UiContainerComponent } from './containers/ui-container/ui-container.component';

@NgModule({
  declarations: [UiContainerComponent],
  exports: [UiContainerComponent],
})
export class UiContainerModule {}
