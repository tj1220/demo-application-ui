import { pages } from './../../../shared/enums';
import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-items',
  templateUrl: './demo-items.component.html',
  styleUrls: ['./demo-items.component.scss']
})
export class DemoItemsComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.currentPage = pages.demoItems;
    this.commonService.currentPageEvent.next();
  }

}
