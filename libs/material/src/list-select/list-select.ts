import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { BaseInput } from '@vnodes/material/input';

@Component({

  selector: 'vn-input[type="list"], vn-input[type="list-select"],',
  imports: [
    FieldsetComponent,
    ReactiveFormsModule,
    MatListModule
  ],
  template: `

  @let __label       =  label();
  @let __control     =  formControl();
  @let __multiple    =  multiple();
  @let __minitems    =  minitems();
  @let __maxitems    =  maxitems();
  @let __required    =  required();
  @let __options     =  options();

  <vn-fieldset [label]="__label">
    <mat-selection-list 
      #componentRef
      [formControl]="__control" 
      [multiple]="__multiple"
      [minlength]="__minitems"
      [maxlength]="__maxitems"
      [required]="__required"
      [ariaLabel]="__label"
      >

    @for (option of __options; track option) {
      <mat-list-option  [value]="option.value">{{option.label}}</mat-list-option>
    }
  </mat-selection-list>
</vn-fieldset>
  `,
})
export class ListSelectComponent extends BaseInput<any> {
  type = input.required<'list' | 'list-select'>()
}
