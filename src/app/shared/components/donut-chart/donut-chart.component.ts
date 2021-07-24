import { Component, Input, OnInit } from '@angular/core';
import { LegendLabels, LegendLabelsContentArgs, LegendMarkers } from '@progress/kendo-angular-charts';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  @Input() chartObject: any;
  legendLabel: LegendLabels = {
    margin: {
      left: 8,
      top: 15
    },
    content: (e: LegendLabelsContentArgs): string => {
      return `${e.text}\n${(e.percentage * 100).toFixed(2)}%\n`;
    }
  };
  legendMarker: LegendMarkers = {
    height: 14,
    width: 14,
    type: `square`
  };

  constructor(public appResponsiveService: AppResponsiveService) {}

  ngOnInit(): void {}
}
