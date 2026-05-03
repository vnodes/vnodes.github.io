import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="time"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTimepickerModule],
  providers: [provideNativeDateAdapter()],
  template: ` 
  @let control =  formControl(); 

  @if(control) { 
    <mat-form-field>

      <!-- Description -->
      @if(label()){ <mat-label>{{ label() }}</mat-label>}
      @if (hint()) { <mat-hint>{{ hint() || "HH:MM" }}</mat-hint> }

      <!-- Prefix/Suffix -->
      @if(textPrefix()){ <span matTextPrefix>{{textPrefix()}}</span>}
      @if(textSuffix()){ <span matTextSuffix>{{textSuffix()}}</span>}
      @if(iconPrefix()){  <mat-icon matIconPrefix>{{iconPrefix()}}</mat-icon>}
      @if(iconSuffix()){  <mat-icon matIconSuffix>{{iconSuffix()}}</mat-icon>}

      <mat-error>{{errorMessage()}}</mat-error>

      <input 
      matInput
      autocomplete="off" 
      [formControl]="formControl()"
      [disabled]="disabled()"
      [required]="required()"
      [matTimepicker]="picker"
      >
      <mat-timepicker-toggle matIconSuffix [for]="picker"/>

      <mat-timepicker #picker/>
    </mat-form-field>
    }
`
})
export class InputTimeComponent extends BaseInput { }
