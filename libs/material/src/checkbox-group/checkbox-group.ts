import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { BaseInput } from '@vnodes/material/input';


export type CheckboxGroupOption = {
  label: string;
  value: any
};

@Component({
  selector: 'vn-input[type="checks"], vn-input[type="checkboxes"], vn-input[type="checkbox-group"]',
  imports: [FieldsetComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatListModule],
  template: `

  <vn-fieldset [label]="label()">
    <mat-selection-list 
      [ariaLabel]="label()"
      [formControl]="formControl()" 
      [multiple]="multiple()"
      (selectionChange)="handleValueChange($event)"
      [minlength]="minlength()"
      [required]="required()"
      >

    @for (option of options(); track option) {
      <mat-list-option [value]="option.value">{{option.label}}</mat-list-option>
    }
  </mat-selection-list>
</vn-fieldset>
  `,
})
export class CheckboxGroupComponent extends BaseInput {

  options = input.required<CheckboxGroupOption[]>();
  multiple = input(true)

  protected override convertToValue(value: string) {
    return value;
  }
}
