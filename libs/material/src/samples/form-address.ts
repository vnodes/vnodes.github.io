import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputTextComponent } from '@vnodes/material/input-text';
import { InputValidator } from '@vnodes/material/validators';


@Component({
  selector: 'vn-form-sample',
  imports: [FormModule, ReactiveFormsModule, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" >  
    <vn-input formControlName="unit" type="text" [required]="true" label="Unit" ></vn-input>
    <vn-input formControlName="street" type="text" [required]="true" label="Street" ></vn-input>
    <vn-input formControlName="city" type="text" [required]="true" label="City" ></vn-input>
    <vn-input formControlName="state" type="text" [required]="true" label="State" ></vn-input>
    <vn-input formControlName="country" type="text" [required]="true" label="Country" ></vn-input>
    <vn-input formControlName="zip" type="text" [required]="true" label="Zip" ></vn-input>
  </form>
  `,
  standalone: true,
})
export class FormAddress {
  inputValidator = inject(InputValidator)
  formGroup = new FormGroup({
    unit: new FormControl('', []),
    street: new FormControl('', [InputValidator.required]),
    city: new FormControl('', [InputValidator.required]),
    state: new FormControl('', [InputValidator.required]),
    country: new FormControl('', [InputValidator.required]),
    zip: new FormControl('', [InputValidator.required]),
  });





}
