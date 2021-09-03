import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn = () => {
    localStorage.setItem(`isSignedIn`, `true`);
  }

  signOut = () => {
    localStorage.setItem(`isSignedIn`, `false`);
  }

  isSignedIn = (): boolean => {
    return JSON.parse(localStorage.getItem(`isSignedIn`));
  }
}
