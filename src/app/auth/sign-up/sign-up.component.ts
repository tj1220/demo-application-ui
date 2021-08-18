import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppResponsiveService } from 'src/app/services/app-responsive.service';
import { confirmPasswordValidator } from 'src/app/shared/validators/confirm-password-validator';
import { PasswordStrengthValidator } from 'src/app/shared/validators/password-strength-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(``, [Validators.required]),
    lastName: new FormControl(``, [Validators.required]),
    email: new FormControl(``, [Validators.required, Validators.email]),
    password: new FormControl(``, [Validators.required, PasswordStrengthValidator]),
    confirmPassword: new FormControl(``),
    termsAndPolicy: new FormControl()
  },
  {
    validators: confirmPasswordValidator('password', 'confirmPassword')
  });

  showTermsAndPolicyErrorMessage: boolean = false;

  constructor(
    public appResponsiveService: AppResponsiveService,
    private router: Router) { }

  ngOnInit(): void {
    this.form.controls[`termsAndPolicy`].valueChanges.subscribe((value) => {
      this.showTermsAndPolicyErrorMessage = !value;
    });
  }

  signUp() {
    this.form.markAllAsTouched();
    if(!this.form.controls[`termsAndPolicy`].value) {
      this.showTermsAndPolicyErrorMessage = true;
      return;
    }
  }

  resetForm() {
    this.form.reset();
    this.showTermsAndPolicyErrorMessage = false;
  }

  goForSignIn() {
    this.router.navigate([`/sign-in`]);
  }
}
