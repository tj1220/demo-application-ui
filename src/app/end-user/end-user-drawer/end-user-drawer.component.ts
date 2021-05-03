import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';

@Component({
  selector: 'app-end-user-drawer',
  templateUrl: './end-user-drawer.component.html',
  styleUrls: ['./end-user-drawer.component.scss'],
  // host: {
  //   "(window:resize)": "onWindowResize($event)"
  // }
})
export class EndUserDrawerComponent implements OnInit {
  @ViewChild(`drawer`) drawer: any;
  expanded: boolean = true;
  constructor(public appResponsiveService: AppResponsiveService) { }

  ngOnInit(): void {
    // this.expanded = !this.appResponsiveService.isTabVertical();
  }

  // onWindowResize(event) {
  //   this.expanded = !this.appResponsiveService.isTabVertical();
  // }

  public selected = 'Inbox';

    public items: Array<DrawerItem> = [
        { text: 'Dashboard', icon: 'k-i-group', selected: true },
        { text: 'Cards', icon: 'k-i-set-column-position' },
        { text: 'Notifications', icon: 'k-i-bell' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
      this.selectSettings = false;
        this.selected = ev.item.text;
    }

    toggleDrawer() {
      this.drawer.toggle();
    }

    selectSettings: boolean = false;
    goToSettings() {
      this.selectSettings = true;
      this.items.forEach((item => item.selected = false))
      this.items = [...this.items];
    }

}
