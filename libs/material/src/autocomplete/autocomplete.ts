import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'vn-input[type="autocomplete"]',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    AsyncPipe
  ],
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
      @if(__hint && __hint!=='')   { <mat-hint>{{ __hint }}</mat-hint>   }
      
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
      [placeholder]="__placeholder"
      [disabled]="__disabled"
      [required]="__required"
      [matAutocomplete]="auto"
      >

    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      @for (option of filteredOptions | async; track option) {
        <mat-option [value]="option.value">{{option.label || option.value}}</mat-option>
      }
    </mat-autocomplete>

  </mat-form-field>
  }
  `
})
export class AutocompleteComponent extends BaseInput<string> {

  /**
   * Observable filtered options based on the input
   */
  filteredOptions = this.formControl().valueChanges.pipe(
    startWith(''),
    map(currentValue => this.filter(currentValue))
  )

  /**
   * Filter the autocomplete options by starting with the input
   * @param currentValue current input value  
   * @returns filtered {@link options}
   */
  filter(currentValue: string) {
    return this.options()?.filter(o => o.value.toLowerCase().startsWith(currentValue.toLowerCase()))
  }



}
