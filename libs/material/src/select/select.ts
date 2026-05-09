import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BaseInput } from '@vnodes/material/input';


export type SelectOption = {
  value: any;
  label: string;
}


@Component({
  selector: 'vn-input[type="select"], vn-input[type="dropdown"]',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  template: `

   @let __control =  formControl(); 
   @let __label = label();
   @let __hint = hint();
   @let __multiple=multiple();
   @let __prefix= textPrefix();
   @let __suffix= textSuffix();
   @let __iconPrefix=iconPrefix();
   @let __iconSuffix=iconSuffix();
   @let __required = required(); 
   @let __disabled=disabled();
   @let __error = errorMessage();
   @let __options = options();

   @if(__control){ 
     <mat-form-field>

      <!-- Labels -->
      @if(__label && __label!=='') { <mat-label>{{ __label }}</mat-label> }
      @if(__hint && __hint!=='')   { <mat-hint>{{ __hint }}</mat-hint>   }
      
      <!-- Prefix/Suffix -->
      @if(__prefix){      <span matTextPrefix>{{__prefix}}</span>}
      @if(__suffix){      <span matTextSuffix>{{__suffix}}</span>}
      @if(__iconPrefix){  <mat-icon matIconPrefix>{{__iconPrefix}}</mat-icon>}
      @if(__iconSuffix){  <mat-icon matIconSuffix>{{__iconSuffix}}</mat-icon>}

      <!-- Error Message -->
      @if(__error){   <mat-error>{{__error}} </mat-error> }
    
    <mat-select 
       matInput
       [formControl]="__control"
       [multiple]="__multiple" 
       [disabled]="__disabled"
       [required]="__required"
    >
      @for (option of __options; track option.value) {
        <mat-option [value]="option.value">{{option.label}}</mat-option>
      }
    </mat-select>
  </mat-form-field>
}
  `
})
export class SelectComponent extends BaseInput {

  type = input.required<'select' | 'dropdown'>()
}
