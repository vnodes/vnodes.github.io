import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '../flex/flex';
import { FormComponent } from '../form/form';
import { InputNumberComponent } from '../input-number/input-number';
import { InputTextComponent } from '../input-text/input-text';


@Component({
  selector: 'vn-form-sample',
  imports: [FormComponent, FormsModule, ReactiveFormsModule, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm [formGroup]="formGroup" vnFlex vnFlexWrap vnFlexGap>
    <vn-input formControlName="name" [minLength]="3" [maxLength]="30" type="text" label="Name" defaultValue="Not Set" ></vn-input>
    <vn-input formControlName="price" type="number" label="Price" [defaultValue]="-1"></vn-input>
    <vn-input formControlName="age" type="integer" label="Age" [defaultValue]="-1"></vn-input>
  </form>
  `,
  standalone: true,
})
export class FormSampleComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(null, [], []),
    age: new FormControl(null, [], []),
    price: new FormControl(null, [], []),
  })
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {
      console.log("Value: ", value);
    })
  }
}
