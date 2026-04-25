import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputTextComponent } from '@vnodes/material/input-text';
import { provideDefaultErrorMessage, provideErrorMessageRegistry } from '@vnodes/material/utils';


@Component({
  selector: 'vn-form-sample',
  imports: [FormModule, ReactiveFormsModule, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" >  
    <vn-input formControlName="street" type="text" [required]="true" label="Street" ></vn-input>
    <vn-input formControlName="city" type="text" [required]="true" label="City" ></vn-input>
    <vn-input formControlName="state" type="text" [required]="true" label="State" ></vn-input>
    <vn-input formControlName="country" type="text" [required]="true" label="Country" ></vn-input>
    <vn-input formControlName="zip" type="text" [required]="true" label="Zip" ></vn-input>
  </form>
  `,
  standalone: true,
  providers: [
    provideDefaultErrorMessage(),
    provideErrorMessageRegistry(),
  ]
})
export class FormAddress {
  formGroup = new FormGroup({
    unit: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
  });



}
