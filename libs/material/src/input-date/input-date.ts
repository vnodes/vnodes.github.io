
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="date"]',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
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
      <mat-hint>{{ __hint || "DD/MM/YY" }}</mat-hint>   
      
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
        [matDatepicker]="picker" 
        [placeholder]="__placeholder" 
        [required]="__required" 
        (dblclick)="picker.open()"
        >
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  }
  `
})
export class InputDateComponent extends BaseInput<Date> { }
