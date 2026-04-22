import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseInput, StringInputType } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="text"]',
  imports: [ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule],
  template: `

  @let control =  formControl(); 

   @if(control){ 
     <mat-form-field >
       <mat-label>{{ label() }}</mat-label>

       <mat-icon matIconPrefix class="rounded fill">home</mat-icon>
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
       @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }
       
       <mat-error>Invalid Input</mat-error>
      </mat-form-field>
      
    }    
    `
})
export class InputTextComponent extends BaseInput<string, StringInputType> {
  minlength = input<number>(0)
  maxlength = input<number>(1000)

  protected override convertToValue(value: string): string | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    return value;
  }
}
