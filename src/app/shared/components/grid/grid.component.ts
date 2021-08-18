import { AppResponsiveService } from './../../../services/app-responsive.service';
import { Component, Input, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult, SelectableSettings } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() gridData: any[] = [];
  @Input() gridColumns: any[] = [];

  gridDataToShow: GridDataResult;
  singleColumn: any = {};
  gridColumnsForSmallScreen: any[];
  public selectedKeys: number[] = [];
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
    this.gridDataToShow = process(this.gridData, this.state);
    setTimeout(() => {
      this.singleColumn = this.gridColumns.find((column) => column.isMaster);
      this.gridColumnsForSmallScreen = this.gridColumns.filter((column) => !column.isMaster);
    });
  }

  selectableSettings: SelectableSettings = {
    checkboxOnly: true,
    mode: 'multiple'
  };

  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: "and",
      filters: [],
    },
  };

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridDataToShow = process(this.gridData, this.state);
  }

  onFilterChange() {
    this.selectedKeys = [];
  }

}
