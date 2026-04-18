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
    <vn-input vnFlexFull formControlName="name" type="text"label="text input"></vn-input>
    <vn-input vnFlexFull formControlName="age" type="number" label="number input"></vn-input>
    <vn-input vnFlexGrow="1" type="integer" label="integer input"></vn-input>
    <vn-input vnFlexGrow="1" type="integer" label="integer input"></vn-input>
    <vn-input vnFlexGrow="1" type="integer" label="integer input"></vn-input>
  </form>
  `,
  standalone: true,

})
export class FormSampleComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(1)
  })

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {

      console.log("Value: ", value);
    })
  }
}
