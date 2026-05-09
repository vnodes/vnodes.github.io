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
  
   @let __control =  formControl(); 
   @let __label = label();
   @let __hint = hint();
   @let __placeholder=placeholder();
   @let __prefix= textPrefix();
   @let __suffix= textSuffix();
   @let __iconPrefix=iconPrefix();
   @let __iconSuffix=iconSuffix();
   @let __required = required(); 
   @let __disabled=disabled();
   @let __error = errorMessage();

   @if(__control){ 
     <mat-form-field>

      <!-- Labels -->
      @if(__label && __label!=='') { <mat-label>{{ __label }}</mat-label> }
      <mat-hint>{{ __hint || "HH:MM" }}</mat-hint>   
      
      <!-- Prefix/Suffix -->
      @if(__prefix){      <span matTextPrefix>{{__prefix}}</span>}
      @if(__suffix){      <span matTextSuffix>{{__suffix}}</span>}
      @if(__iconPrefix){  <mat-icon matIconPrefix>{{__iconPrefix}}</mat-icon>}
      @if(__iconSuffix){  <mat-icon matIconSuffix>{{__iconSuffix}}</mat-icon>}

      <!-- Error Message -->
      @if(__error){   <mat-error>{{__error}} </mat-error> }
    
      <input 
        matInput
        type="text"
        autocomplete="off" 
        [formControl]="__control"
        [disabled]="__disabled"
        [required]="__required"
        [matTimepicker]="picker"
        [ariaLabel]="__label"
        [placeholder]="__placeholder"
        (dblclick)="picker.open()"
      >
      <mat-timepicker-toggle matIconSuffix [for]="picker"/>
      <mat-timepicker #picker/>
    </mat-form-field>
    }
`
})
export class InputTimeComponent extends BaseInput { }
