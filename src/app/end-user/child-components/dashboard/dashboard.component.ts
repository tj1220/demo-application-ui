import { AppResponsiveService } from 'src/app/services/app-responsive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  summaryCards: any[] = [
    {
      title: `CARD-1 TITLE`,
      icon: `front-element`,
      amount: 1234,
      subtitle: `Card - 1 subtitle goes here`,
      backgroundColor: '#FBAD4C'
    },
    {
      title: `CARD-1 TITLE`,
      icon: `back-element`,
      amount: 1234,
      subtitle: `Card - 1 subtitle goes here`,
      backgroundColor: '#59D05D'
    },
    {
      title: `CARD-1 TITLE`,
      icon: `forward-element`,
      amount: 1234,
      subtitle: `Card - 1 subtitle goes here`,
      backgroundColor: '#FF646D'
    },
    {
      title: `CARD-1 TITLE`,
      icon: `backward-element`,
      amount: 1234,
      subtitle: `Card - 1 subtitle goes here`,
      backgroundColor: '#1D62F0'
    }
  ];
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
  }

}
