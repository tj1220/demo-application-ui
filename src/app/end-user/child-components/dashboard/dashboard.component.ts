import { pages } from './../../../shared/enums';
import { CommonService } from './../../../services/common.service';
import { DashboardService } from './../../../services/dashboard.service';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';
import { Component, OnInit } from '@angular/core';
import { gridColumns } from './grid-columns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  gridColumns = gridColumns;
  constructor(
    private commonService: CommonService,
    public appResponsiveService: AppResponsiveService,
    public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.commonService.currentPage = pages.dashboard;
    this.commonService.currentPageEvent.next();
  }

}
