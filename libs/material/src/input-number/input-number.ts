import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, NumberInputType } from '@vnodes/material/input';
import { NumberFilterDirective } from '@vnodes/material/number-filter';
import { ErrorConstraints, ErrorMessageRegistry } from '@vnodes/material/utils';


@Component({
  selector: 'vn-input[type="number"], vn-input[type="integer"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NumberFilterDirective,
  ],
  providers: [ErrorMessageRegistry],
  template: `
  @let control =  formControl(); 

  @if(control) { 
    <mat-form-field>
      <!-- Description -->
      @if(label()){ <mat-label>{{ label() }}</mat-label>}
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }

      <!-- Prefix/Suffix -->
      @if(textPrefix()){ <span matTextPrefix>{{textPrefix()}}</span>}
      @if(textSuffix()){ <span matTextSuffix="">{{textSuffix()}}</span>}
      @if(iconPrefix()){  <mat-icon matIconPrefix>{{iconPrefix()}}</mat-icon>}
      @if(iconSuffix()){  <mat-icon matIconSuffix>{{iconSuffix()}}</mat-icon>}


      <!-- Errors -->
      <mat-error>{{errorMessage()}}</mat-error>

      <!-- Input -->
      <input
      type="text"
      matInput
      autocomplete="off"
      [formControl]="formControl()"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      (input)="handleInput($event)"
      (blur)="handleBlur()"
      [min]="min()"
      [max]="max()"
      [maxlength]="maxlength()"
      [required]="required()"
      vnNumberFilter
      />
    </mat-form-field>
  }
    `
})
export class InputNumberComponent extends BaseInput<number> {

  type = input.required<NumberInputType>();


  protected override convertToValue(value: string) {

    if (value === null || value === undefined || value === '') {
      return null
    }

    const parsedValue = this.type() === 'integer'
      ? parseInt(value, 10)
      : parseFloat(value);

    return isNaN(parsedValue) ? null : parsedValue;

  }

  constraints(): ErrorConstraints {
    return {
      min: this.min(),
      max: this.max(),
      maxlength: this.maxlength()
    }
  }

}
