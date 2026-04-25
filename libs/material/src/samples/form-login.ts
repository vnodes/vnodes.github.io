import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputTextComponent } from '@vnodes/material/input-text';
import { provideDefaultErrorMessage, provideErrorMessageRegistry } from '@vnodes/material/utils';
import { CustomValidators } from '@vnodes/material/validators';


@Component({
  selector: 'vn-form-sample',
  imports: [FormModule, MatButtonModule, ReactiveFormsModule, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" submitLabel="Login" resetLabel="Reset" >  
    <vn-input type="text" [required]="true" formControlName="username" label="Username" ></vn-input>
    <vn-input type="text" [required]="true" formControlName="password" label="Password" ></vn-input>

    <button type="button" mat-flat-button vnFormAction (click)="forgotPassword()">Forgot Password</button>
  </form>
  `,
  standalone: true,
  providers: [
    provideDefaultErrorMessage(),
    provideErrorMessageRegistry(),
  ]
})
export class FormLogin {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      CustomValidators.hasLowercase,
      CustomValidators.hasUppercase,
      CustomValidators.hasSpecialchar,
      CustomValidators.hasNumber,
    ]),
  });



  forgotPassword() {
    console.log("Forgot password button clicked")
  }

}
