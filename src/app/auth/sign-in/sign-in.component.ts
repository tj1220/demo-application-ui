import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(``, [Validators.required]),
    password: new FormControl(``, [Validators.required]),
    rememberMe: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit(): void {}

  submitForm() {
    this.form.markAllAsTouched();
  }

  clearForm() {
    this.form.reset();
  }

  goForSignUp() {
    this.router.navigate([`/sign-up`]);
  }

}
