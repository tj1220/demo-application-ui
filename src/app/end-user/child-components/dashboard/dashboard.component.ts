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
      subtitle: `Card-1 subtitle goes here ...`,
      backgroundColor: '#5CA7FF'
    },
    {
      title: `CARD-2 TITLE`,
      icon: `back-element`,
      amount: 1234,
      subtitle: `Card-2 subtitle goes here ...`,
      backgroundColor: '#4FDFC2'
    },
    {
      title: `CARD-3 TITLE`,
      icon: `forward-element`,
      amount: 1234,
      subtitle: `Card-3 subtitle goes here ...`,
      backgroundColor: '#FFBE5F'
    },
    {
      title: `CARD-4 TITLE`,
      icon: `backward-element`,
      amount: 1234,
      subtitle: `Card-4 subtitle goes here ...`,
      backgroundColor: '#FF758C'
    }
  ];
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
  }

}
