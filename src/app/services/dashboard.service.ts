import { departments, gender } from './../shared/enums';
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
    color: 'rgb(0, 100, 0)'
  };

  donutChartObject: any = {
    data: [
      {category: 'Category 1', value: 10000, color: 'rgba(0, 100, 0, 0.2)'},
      {category: 'Category 2', value: 15000, color: 'rgba(0, 100, 0, 0.4)'},
      {category: 'Category 3', value: 20000, color: 'rgba(0, 100, 0, 0.6)'},
      {category: 'Category 4', value: 25000, color: 'rgba(0, 100, 0, 0.8)'},
      {category: 'Category 5', value: 30000, color: 'rgba(0, 100, 0, 1.0)'},
    ],
    field: 'value',
    categoryField: 'category'
  };

  gridData: any[] = [{
    employeeId: 'EMP-100001',
    employeeName: 'James',
    doj: new Date('November 15, 2019'),
    age: 26,
    gender: gender.Male,
    department: departments.Engineering
  }, {
    employeeId: 'EMP-100002',
    employeeName: 'John',
    doj: new Date('March 1, 2020'),
    age: 24,
    gender: gender.Male,
    department: departments.Engineering
  }, {
    employeeId: 'EMP-100006',
    employeeName: 'Elizabeth',
    doj: new Date('March 1, 2020'),
    age: 24,
    gender: gender.Female,
    department: departments.Sales
  }, {
    employeeId: 'EMP-100007',
    employeeName: 'Mary',
    doj: new Date('January 15, 2019'),
    age: 21,
    gender: gender.Female,
    department: departments.Engineering
  }, {
    employeeId: 'EMP-100003',
    employeeName: 'Robert',
    doj: new Date('January 15, 2018'),
    age: 30,
    gender: gender.Male,
    department: departments.HR
  }, {
    employeeId: 'EMP-100004',
    employeeName: 'William',
    doj: new Date('January 1, 2021'),
    age: 20,
    gender: gender.Male,
    department: departments.Management
  }, {
    employeeId: 'EMP-100005',
    employeeName: 'Thomas',
    doj: new Date('November 15, 2019'),
    age: 26,
    gender: gender.Male,
    department: departments.Management
  }, {
    employeeId: 'EMP-100008',
    employeeName: 'Sarah',
    doj: new Date('January 1, 2021'),
    age: 18,
    gender: gender.Female,
    department: departments.HR
  }];
}
