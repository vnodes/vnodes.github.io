import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FormComponent, InputNumberComponent, InputTextComponent } from '@vnodes/material';


@Component({
  selector: 'vn-form-sample',
  imports: [FormComponent, ReactiveFormsModule, MatInputModule, MatFormFieldModule, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlexCol [formGroup]="formGroup" >  
    <vn-input  formControlName="name"     type="text" [required]="true"  [minLength]="3" [maxLength]="30" label="Name" ></vn-input>
    <vn-input  formControlName="price"    type="number" [required]="true"  label="Price"> </vn-input>
    <vn-input  formControlName="age"      type="integer" [required]="true"  label="Age" ></vn-input>
    
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
