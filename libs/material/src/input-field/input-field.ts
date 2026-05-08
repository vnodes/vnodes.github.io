import { Component, input } from '@angular/core';
import { AutocompleteComponent } from '@vnodes/material/autocomplete';
import { ButtonToggleComponent } from '@vnodes/material/button-toggle';
import { CheckboxComponent } from '@vnodes/material/checkbox';
import { BaseInput } from '@vnodes/material/input';
import { InputDateComponent } from '@vnodes/material/input-date';
import { InputNumberComponent } from '@vnodes/material/input-number';
import { InputTextComponent } from '@vnodes/material/input-text';
import { InputTimeComponent } from '@vnodes/material/input-time';
import { ListSelectComponent } from '@vnodes/material/list-select';
import { RadioComponent } from '@vnodes/material/radio';
import { SelectComponent } from '@vnodes/material/select';
import { SlideToggleComponent } from '@vnodes/material/slide-toggle';

export type InputType =
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'time'
  | 'autocomplete'
  | 'list'
  | 'select'
  | 'slide'
  | 'button-toggle'
  | 'radio'
  | 'checkbox'


  
@Component({
  selector: 'vn-input-field',
  imports: [
    InputDateComponent,
    InputTimeComponent,

    InputTextComponent,
    AutocompleteComponent,
    InputNumberComponent,

    ListSelectComponent,
    SlideToggleComponent,
    ButtonToggleComponent,
    RadioComponent,
    CheckboxComponent,
    SelectComponent,
  ],
  template: `
  
  @let t = type(); 

  @if(t==='text'){ <vn-input type="text"></vn-input> }
  @else if(t==='select'){ <vn-input [label]="label()" type="select" [options]="options()"></vn-input> }
  @else if(t==='autocomplete'){ <vn-input [label]="label()" type="autocomplete" [options]="options()"  ></vn-input> }
  @else if(t==='radio'){ <vn-input [label]="label()" type="radio" [options]="options()"></vn-input> }
  @else if(t==='list'){ <vn-input [label]="label()" type="list" [options]="options()"></vn-input> }
  @else if(t==='button-toggle'){ <vn-input [label]="label()" type="button-toggle" [options]="options()"></vn-input> }
  @else if(t==='number'){ <vn-input [label]="label()" type="number"></vn-input> }
  @else if(t==='integer'){ <vn-input [label]="label()" type="integer"></vn-input> }
  @else if(t==='checkbox'){ <vn-input [label]="label()" type="checkbox"></vn-input> }
  @else if(t==='date'){ <vn-input [label]="label()" type="date"></vn-input> }
  @else if(t==='time'){ <vn-input [label]="label()" type="time"></vn-input> }
  
  @else if(t==='slide'){ <vn-input [label]="label()" type="slide"></vn-input> }
  `,
  styles: `
    vn-input { 
      width: 100%;
    }
  `
})
export class InputFieldComponent extends BaseInput {
  type = input.required<InputType>()
}
