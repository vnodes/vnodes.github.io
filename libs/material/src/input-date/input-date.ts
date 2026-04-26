
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="date"]',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  template: `
   @let control =  formControl(); 

  @if(control) { 
    <mat-form-field>
     
      <!-- Description -->
      @if(label()){ <mat-label>{{ label() }}</mat-label>}
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint> }

      <!-- Prefix/Suffix -->
      @if(textPrefix()){ <span matTextPrefix>{{textPrefix()}}</span>}
      @if(textSuffix()){ <span matTextSuffix>{{textSuffix()}}</span>}
      @if(iconPrefix()){  <mat-icon matIconPrefix>{{iconPrefix()}}</mat-icon>}
      @if(iconSuffix()){  <mat-icon matIconSuffix>{{iconSuffix()}}</mat-icon>}


      <input 
        autocomplete="off"
        matInput 
        [disabled]="disabled()"
        (input)="handleInput($event)"
        (blur)="handleBlur()"
        [matDatepicker]="picker" 
        [placeholder]="placeholder()" 
        [formControl]="formControl()" 
        [required]="required()" 
        (dblclick)="picker.open()">
      <mat-hint>{{hint() || "MM/DD/YYYY"}}</mat-hint>
      <mat-error>{{errorMessage()}} </mat-error>
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  }
  `,
  providers: [provideNativeDateAdapter()]
})
export class InputDateComponent extends BaseInput<Date> {


  protected override convertToValue(value: string): Date | null {

    if (value) {
      return new Date(value);
    }
    return null;
  }
}
