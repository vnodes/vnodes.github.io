import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '../flex/flex';
import { FormComponent } from '../form/form';
import { InputNumberComponent } from '../input-number/input-number';
import { InputTextComponent } from '../input-text/input-text';


@Component({
  selector: 'vn-form-sample',
  imports: [FormComponent, MatInputModule, MatFormFieldModule, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm [formGroup]="formGroup" vnFlex vnFlexWrap vnFlexGap>
    <vn-input vnFlexFull formControlName="name" type="text" [required]="true"  [minLength]="3" [maxLength]="30" label="Name" ></vn-input>
    <vn-input vnFlexGrow formControlName="price" type="number" [required]="true"  label="Price"> </vn-input>
    <vn-input vnFlexGrow formControlName="age" type="integer" [required]="true"  label="Age" ></vn-input>
  </form>
  `,
  standalone: true,
})
export class FormSampleComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.min(0)),
    age: new FormControl(null, Validators.min(18)),
  });

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {
      console.log("FormGroup: ", value);
    })


  }



  ctrl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

}
