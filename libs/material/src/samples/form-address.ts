import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '@vnodes/material/checkbox';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputNumberComponent } from '@vnodes/material/input-number';
import { InputTextComponent } from '@vnodes/material/input-text';
import { InputValidator } from '@vnodes/material/validators';



@Component({
  selector: 'vn-form[address]',
  imports: [FormModule, ReactiveFormsModule, CheckboxComponent, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" (formSubmitEvet)="handleFormSubmit($event)">  

  <div vnInput>

    @for(input of inputs; track input.name){ 
      @if (input.type ==="text") {
        <vn-input [formControlName]="input.name" type="text" [required]="true" [label]="input.label" ></vn-input>  
      } @else if(input.type ==="number") {
        <vn-input [formControlName]="input.name" type="number" [required]="true" [label]="input.label" ></vn-input>  
      } @else if(input.type ==="integer") {
        <vn-input [formControlName]="input.name" type="integer" [required]="true" [label]="input.label" ></vn-input>  
      } @else if(input.type ==="checkbox") {
        <vn-input [formControlName]="input.name" type="checkbox" [required]="true" [label]="input.label" ></vn-input>  
      }
      
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
