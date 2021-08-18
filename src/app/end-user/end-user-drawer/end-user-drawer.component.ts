import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';

@Component({
  selector: 'app-end-user-drawer',
  templateUrl: './end-user-drawer.component.html',
  styleUrls: ['./end-user-drawer.component.scss']
})
export class EndUserDrawerComponent implements OnInit {
  @ViewChild(`drawer`) drawer: any;
  expanded: boolean = true;
  constructor(
    public appResponsiveService: AppResponsiveService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public selected = 'Inbox';

    public items = [
        { text: 'Dashboard', path: 'dashboard', icon: 'k-i-group', selected: true },
        { text: 'Demo Items', path: 'demo-items', icon: 'k-i-set-column-position' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
      this.selectSettings = false;
      this.selected = ev.item.text;
      this.router.navigate([`user/${ev.item.path}`]);
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

    signOut() {
      this.router.navigate([`sign-in`]);
    }

}
