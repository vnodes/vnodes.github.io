import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { BaseInput } from '@vnodes/material/input';

export type RadioOption = {
  value: any;
  label: string;
};

@Component({
  selector: 'vn-input[type="radio"], vn-input[type="radio-group"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatRadioModule, FieldsetComponent],
  template: `
    @let __control = formControl();
    @let __label = label();
    @let __required = required();
    @let __disabled = disabled();
    @let __options = options();

    @if (__control) {
      <vn-fieldset [label]="label()">
        <mat-radio-group
          [formControl]="__control"
          [disabled]="__disabled"
          [required]="__required"
          [ariaLabel]="__label"
        >
          @for (option of __options; track option) {
            <mat-radio-button [value]="option.value">{{
              option.label
            }}</mat-radio-button>
          }
        </mat-radio-group>
      </vn-fieldset>
    }
  `,
  styles:`
  mat-radio-group > mat-radio-button:not(:first-child) {  
    margin-left: 1rem;
  }  
  
  `
})
export class RadioComponent extends BaseInput {
  type = input.required<'radio' | 'radio-group'>();
}
