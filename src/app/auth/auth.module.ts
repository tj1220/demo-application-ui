import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';

const declarationsAndExportsComponents = [];

@NgModule({
  declarations: [
    ...declarationsAndExportsComponents,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule
  ],
  exports: [
    ...declarationsAndExportsComponents
  ]
})
export class AuthModule { }
