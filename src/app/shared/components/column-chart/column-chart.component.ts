import { Component, Input, OnInit } from '@angular/core';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @Input() chartObject: any;
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
  }

}
