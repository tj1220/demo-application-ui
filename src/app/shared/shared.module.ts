import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBlockComponent } from './components/summary-block/summary-block.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import 'hammerjs';

const declarationsAndExports = [
  SummaryBlockComponent,
  ColumnChartComponent,
  DonutChartComponent
];

@NgModule({
  declarations: [
    ...declarationsAndExports
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ...declarationsAndExports
  ]
})
export class SharedModule { }
