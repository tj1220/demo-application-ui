import { LayoutModule } from '@progress/kendo-angular-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBlockComponent } from './components/summary-block/summary-block.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { GridComponent } from './components/grid/grid.component';
import 'hammerjs';
import { GridDropdownFilterComponent } from './components/grid/grid-dropdown-filter/grid-dropdown-filter.component';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { CardArticleComponent } from './components/cards/card-article/card-article.component';
import { CardProductComponent } from './components/cards/card-product/card-product.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const declarationsAndExports = [
  SummaryBlockComponent,
  ColumnChartComponent,
  DonutChartComponent,
  GridComponent,
  CardArticleComponent,
  CardProductComponent
];

@NgModule({
  declarations: [
    ...declarationsAndExports,
    GridDropdownFilterComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GridModule,
    DropDownListModule,
    LayoutModule,
    ButtonsModule
  ],
  exports: [
    ...declarationsAndExports
  ]
})
export class SharedModule { }
