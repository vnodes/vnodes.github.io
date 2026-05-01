import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { BaseInput } from '@vnodes/material/input';

export type RadioOption = {
  value: any;
  label: string;
}

@Component({
  selector: 'vn-input[type="radio"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FieldsetComponent
  ],
  template: `

<vn-fieldset [label]="label()">
  <mat-radio-group  
  [aria-label]="label()"
  [id]="ngControl?.name"
  matInput
  [formControl]="formControl()"
  [disabled]="disabled()"
  (input)="handleInput($event)"
  (blur)="handleBlur()"
  [minlength]="minlength()"
  [maxlength]="maxlength()"
  [required]="required()"
  >
  
  @for(option of options(); track option){ 
    <mat-radio-button [value]="option.value" >{{option.label}}</mat-radio-button>
  }
</mat-radio-group>

</vn-fieldset>
  `
})
export class RadioComponent extends BaseInput {
  options = input.required<RadioOption[]>({});

  protected override convertToValue(value: string) {
    return value
  }
}
