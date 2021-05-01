import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SignInComponent } from './sign-in/sign-in.component';
import { LabelModule } from '@progress/kendo-angular-label';

const declarationsAndExportsComponents = [
  SignInComponent,
  SignUpComponent
];

@NgModule({
  declarations: [
    ...declarationsAndExportsComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule
  ],
  exports: [
    ...declarationsAndExportsComponents
  ]
})
export class AuthModule { }
