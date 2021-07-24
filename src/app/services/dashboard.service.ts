import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

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

  columnChartObject: any = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [10000, 20000, 30000, 10000, 45000, 30000, 50000, 35000, 20000, 0, 0, 0],
    valueAxis: {
      labels: {
        format: '{0:C0}'
      }
    },
    color: '#4473C5'
  };

  donutChartObject: any = {
    data: [
      {category: 'Category 1', value: 10000},
      {category: 'Category 2', value: 15000},
      {category: 'Category 3', value: 20000},
      {category: 'Category 4', value: 25000},
      {category: 'Category 5', value: 30000},
    ],
    field: 'value',
    categoryField: 'category'
  };
}
