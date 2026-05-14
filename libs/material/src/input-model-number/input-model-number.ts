import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputModelDirective } from '@vnodes/material/form-model';
import { NumberFilterDirective } from '@vnodes/material/number-filter';



export type InputNumberType = 'number' | 'integer';


@Component({
  selector: 'vn-input[type="integer"], vn-input[type="number"],',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, NumberFilterDirective],
  template: `
  <mat-form-field>
  @let __label = label(); 
  @let __hint = hint(); 

  @let __type = type();
  @let __decimals = decimals();

  @let __required = required(); 
  @let __iconPrefix = iconPrefix();
  @let __iconSuffix = iconSuffix();
  @let __textPrefix = textPrefix();
  @let __textSuffix = textSuffix();
  @let __errorMessages = errorMessages();
  @let __disabled = disabled();


  @if(__label){ <mat-label>{{__label}}</mat-label> }
  @if(__hint){ <mat-hint>{{__hint}}</mat-hint> }
  
  @if(__iconPrefix){ <mat-icon matIconPrefix>{{__iconPrefix}}</mat-icon> }
  @if(__iconSuffix){ <mat-icon matIconSuffix>{{__iconSuffix}}</mat-icon> }
  @if(__textPrefix){ <span matTextPrefix>{{__textPrefix}}</span> }
  @if(__textSuffix){ <span matTextSuffix>{{__textSuffix}}</span> }


  @if(__errorMessages){  
    <mat-error >{{__errorMessages}}</mat-error>
  } 

    <input 
    matInput  
    type="text" 
    [name]="name()"
    autocomplete="off" 
    [attr.inputmode]="inputmode()"
    [disabled]="__disabled"

    [(ngModel)]="value"

    [required]="__required" 
    [minLength]="(minlength() || 0)"
    [maxLength]="(maxlength() || 22)"
    [min]="min()"
    [max]="max()"

    vnNumberFilter
    [vnNumberType]="__type"
    [vnDecimals]="__decimals"


    (blur)="handleTouchEvent($event)"
    (input)="handleInputEvent($event)"
    (click)="handleClickEvent($event)"

    [errorStateMatcher]="errorStateMatcher"
    >

  </mat-form-field>
  `
})
export class InputModelNumberComponent extends InputModelDirective<number, InputNumberType> {

}
