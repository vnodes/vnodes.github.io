import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputTextComponent } from '@vnodes/material/input-text';
import { InputValidator } from '@vnodes/material/validators';

@Component({
  selector: 'vn-form-sample',
  imports: [FormModule, MatButtonModule, ReactiveFormsModule, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" submitLabel="Login" resetLabel="Reset" >  
    <vn-input type="text" [required]="true" formControlName="username" label="Username" ></vn-input>
    <vn-input type="text" [required]="true" [password]="true" formControlName="password" label="Password" ></vn-input>

    <button type="button" mat-flat-button vnFormAction (click)="forgotPassword()">Forgot Password</button>
  </form>
  `,
  standalone: true
})
export class FormLogin {
  inputValidator = inject(InputValidator)
  formGroup = new FormGroup({
    username: new FormControl('', [
      InputValidator.required(),
      InputValidator.email(),
    ]),
    password: new FormControl('', [
      InputValidator.required(),
      InputValidator.password(),

    ]),
  });

  forgotPassword() {
    console.log("Forgot password button clicked")
  }



}
