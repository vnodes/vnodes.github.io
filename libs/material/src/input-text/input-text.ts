import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';
import { ErrorConstraints } from '@vnodes/material/utils';

@Component({
  selector: 'vn-input[type="text"]',
  imports: [ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule],
  template: `

   @let control =  formControl(); 

   @if(control){ 
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

       <input
       type="text"
       matInput
       [formControl]="formControl()"
       [placeholder]="placeholder()"
       [disabled]="disabled()"
       (input)="handleInput($event)"
       (blur)="handleBlur()"
       [minlength]="minlength()"
       [maxlength]="maxlength()"
       [required]="required()"
       />
       
      </mat-form-field>
      
    }    
    `
})
export class InputTextComponent extends BaseInput<string> {
  type = input.required<'text'>();
  minlength = input<number>(0)
  maxlength = input<number>(1000)

  protected override constraints(): ErrorConstraints {
    return {
      minlength: this.minlength(),
      maxlength: this.maxlength()
    }
  }
  protected override convertToValue(value: string): string | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    return value;
  }
}
