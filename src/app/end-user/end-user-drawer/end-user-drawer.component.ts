import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';
import { pages } from 'src/app/shared/enums';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-end-user-drawer',
  templateUrl: './end-user-drawer.component.html',
  styleUrls: ['./end-user-drawer.component.scss']
})
export class EndUserDrawerComponent implements OnInit {
  @ViewChild(`drawer`) drawer: any;
  subscriptions: Subscription[] = [];
  expanded: boolean = true;
  items: any = [
    { text: pages.dashboard, path: `dashboard`, icon: `k-i-group` },
    { text: pages.demoItems, path: `demo-items`, icon: `k-i-set-column-position` }
  ];
  constructor(
    private commonService: CommonService,
    public appResponsiveService: AppResponsiveService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.commonService.currentPageEvent.subscribe(() => {
        this.selectDrawerItem(this.commonService.currentPage);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSelect(ev: DrawerSelectEvent): void {
    this.selectSettings = false;
    this.router.navigate([`user/${ev.item.path}`]);
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  selectSettings: boolean = false;
  goToSettings() {
    this.selectSettings = true;
    this.items.forEach((item => item.selected = false))
  }

  signOut() {
    this.router.navigate([`sign-in`]);
  }

  selectDrawerItem = (title: string) => {
    this.items.forEach(item => {
      item.selected = item.text === title;
    });
  }
}
