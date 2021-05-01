import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
