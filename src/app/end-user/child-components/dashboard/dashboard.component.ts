import { DashboardService } from './../../../services/dashboard.service';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    public appResponsiveService: AppResponsiveService,
    public dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

}
