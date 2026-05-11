import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputFieldComponent } from '@vnodes/material/input-field';
import { InputValidator } from '@vnodes/material/validators';



@Component({
  selector: 'vn-form[address]',
  imports: [FormModule, ReactiveFormsModule, InputFieldComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" (formSubmitEvet)="handleFormSubmit($event)">  

  <div vnInput>
    @for(input of inputs; track input.name){ 
      <vn-input-field [type]="input.type" [formControlName]="input.name" [label]="input.label"></vn-input-field>
    }
  </div>
    
  </form>
  `
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
    active: new FormControl(false, [InputValidator.required]),
  });

  inputs: { name: string, label: string, required?: boolean, type: any }[] = [
    { name: "unit", label: "unit", type: "text" },
    { name: "street", label: "street", type: "text" },
    { name: "city", label: "city", type: "text" },
    { name: "state", label: "state", type: "text" },
    { name: "country", label: "country", type: "text" },
    { name: "active", label: "Active", type: "checkbox" },
  ]

  handleFormSubmit(value: any) {
    console.log("Addredd form submit: ", value)

  }

}
