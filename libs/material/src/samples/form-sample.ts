import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@vnodes/material/flex';
import { FormComponent } from '@vnodes/material/form';
import { InputNumberComponent } from '@vnodes/material/input-number';
import { InputTextComponent } from '@vnodes/material/input-text';
import { provideDefaultErrorMessage, provideErrorMessageRegistry } from '@vnodes/material/utils';


export function provideTestImports() {
  return [FormComponent, ReactiveFormsModule, MatInputModule, MatFormFieldModule, InputNumberComponent, InputTextComponent, FlexModule]
}

@Component({
  selector: 'vn-form-sample',
  imports: [FormComponent, ReactiveFormsModule, MatInputModule, MatFormFieldModule, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol vnFlexGap [formGroup]="formGroup" >  
    <vn-input formControlName="name" type="text" [required]="true"  [minlength]="3" [maxlength]="30" label="Name" ></vn-input>
    <vn-input formControlName="price" type="number" [required]="true"  label="Price"> </vn-input>
    <vn-input formControlName="age" type="integer" [required]="true"  label="Age" ></vn-input>
  </form>
  `,
  standalone: true,
  providers: [
    provideDefaultErrorMessage(),
    provideErrorMessageRegistry(),
  ]
})
export class FormSampleComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.min(0)]),
    age: new FormControl(0, [Validators.min(18)]),
  });

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {
      console.log("FormGroup: ", value);
    })

  }

}
