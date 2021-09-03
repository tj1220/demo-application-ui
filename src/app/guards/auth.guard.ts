import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(): boolean {
    let isSignedIn = this.authService.isSignedIn();
    if(!isSignedIn) {
      this.router.navigate([`sign-in`]);
    }
    return isSignedIn;
  }
}
