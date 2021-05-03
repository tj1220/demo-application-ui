import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBlockComponent } from './components/summary-block/summary-block.component';

const declarationsAndExports = [
  SummaryBlockComponent
];

@NgModule({
  declarations: [
    ...declarationsAndExports
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...declarationsAndExports
  ]
})
export class SharedModule { }
