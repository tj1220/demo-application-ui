import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
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
    component: EndUserDrawerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
