import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'vn-input[type="autocomplete"]',
  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, AsyncPipe
  ],
  template: `
   @let control =  formControl(); 

   @if(control){ 
     <mat-form-field>

       <!-- Description -->
      @if(label()){  <mat-label>{{ label() }}</mat-label>           }
      @if (hint()) { <mat-hint>{{ hint() }}</mat-hint>              }

      <!-- Prefix/Suffix -->
      @if(textPrefix()){  <span matTextPrefix>{{textPrefix()}}</span>           }
      @if(textSuffix()){  <span matTextSuffix>{{textSuffix()}}</span>           }
      @if(iconPrefix()){  <mat-icon matIconPrefix>{{iconPrefix()}}</mat-icon>   }
      @if(iconSuffix()){  <mat-icon matIconSuffix>{{iconSuffix()}}</mat-icon>   }


    <!-- Errors -->
    <mat-error>{{errorMessage()}}</mat-error>
    
    <input 
      type="text"
      autocomplete="off"
      matInput
      [formControl]="control"
      [placeholder]="placeholder()"
      [disabled]="disabled()"
      [required]="required()"
      [matAutocomplete]="auto">

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

  filteredOptions = this.formControl().valueChanges.pipe(
    startWith(''),
    map(currentValue => this.filter(currentValue))

  )

  filter(currentValue: string) {
    return this.options()?.filter(o => o.value.toLowerCase().startsWith(currentValue.toLowerCase()))
  }



}
