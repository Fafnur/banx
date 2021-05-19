import { NgModule } from '@angular/core';

import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';

const components = [RowComponent, ColumnComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
})
export class GridModule {}
