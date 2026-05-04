import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BaseInput } from '@vnodes/material/input';


export type SelectOption = {
  value: any;
  label: string;
}


@Component({
  selector: 'vn-input[type="select"], vn-input[type="dropdown"]',
  imports: [
    ReactiveFormsModule,
    MatSelectModule
  ],
  template: `
   @let control =  formControl(); 

   @if(control){ 
    <mat-form-field>
       <!-- Description -->
      @if(label()){ <mat-label>{{ label() }}</mat-label>}
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }

      <!-- Prefix/Suffix -->
      @if(textPrefix()){ <span matTextPrefix>{{textPrefix()}}</span>}
      @if(textSuffix()){ <span matTextSuffix>{{textSuffix()}}</span>}
      @if(iconPrefix()){  <mat-icon matIconPrefix>{{iconPrefix()}}</mat-icon>}
      @if(iconSuffix()){  <mat-icon matIconSuffix>{{iconSuffix()}}</mat-icon>}
      
      <mat-error>{{errorMessage()}}</mat-error>

    <mat-select 
       [multiple]="multiple()" 
       [formControl]="formControl()"
       [disabled]="disabled()"
       [required]="required()"
    >
      @for (option of options(); track option.value) {
        <mat-option [value]="option.value">{{option.label}}</mat-option>
      }
    </mat-select>
  </mat-form-field>
}
  `
})
export class SelectComponent extends BaseInput {

  type = input.required<'select' | 'dropdown'>()
}
