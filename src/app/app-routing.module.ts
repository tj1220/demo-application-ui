import { DemoItemsComponent } from './end-user/child-components/demo-items/demo-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './end-user/child-components/dashboard/dashboard.component';
import { EndUserDrawerComponent } from './end-user/end-user-drawer/end-user-drawer.component';
import { SignInGuard } from './guards/sign-in.guard';

const routes: Routes = [
  {
    path: ``,
    pathMatch: `full`,
    redirectTo: `sign-in`
  },
  {
    path: `sign-in`,
    component: SignInComponent,
    canActivate: [SignInGuard]
  },
  {
    path: `sign-up`,
    component: SignUpComponent
  },
  {
    path: `user`,
    component: EndUserDrawerComponent,
    children: [
      {
        path: '',
        pathMatch: `full`,
        redirectTo: 'dashboard',
      },
      {
        path: `dashboard`,
        component: DashboardComponent
      },
      {
        path: `demo-items`,
        component: DemoItemsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
