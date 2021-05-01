import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    let isSignedIn = sessionStorage.getItem(`signedIn`);
    if(isSignedIn) {
      this.router.navigate([`end-user`]);
      return false;
    }
    return true;
  }

}
