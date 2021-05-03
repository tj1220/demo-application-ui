import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { EndUserDrawerComponent } from './end-user-drawer/end-user-drawer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { BadgeModule } from '@progress/kendo-angular-indicators';



@NgModule({
  declarations: [EndUserDrawerComponent, TopbarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AppBarModule,
    BadgeModule
  ]
})
export class EndUserModule { }
