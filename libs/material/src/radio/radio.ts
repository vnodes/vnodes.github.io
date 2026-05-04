import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    FieldsetComponent
  ],
  template: `
<vn-fieldset [label]="label()">
    <mat-radio-group  
      matInput
      [ariaLabel]="label()"
      [formControl]="formControl()"
      [disabled]="disabled()"
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
  type = input.required<'radio'>()
}
