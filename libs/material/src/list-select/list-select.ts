import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { BaseInput } from '@vnodes/material/input';

@Component({

  selector: 'vn-input[type="list"]',
  imports: [
    FieldsetComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  template: `
  <vn-fieldset [label]="label()">
    <mat-selection-list 
      [ariaLabel]="label()"
      [formControl]="formControl()" 
      [multiple]="multiple()"
      [minlength]="minitems()"
      [maxlength]="maxitems()"
      [required]="required()"
      >

    @for (option of options(); track option) {
      <mat-list-option [value]="option.value">{{option.label}}</mat-list-option>
    }
  </mat-selection-list>
</vn-fieldset>
  `,
})
export class ListSelectComponent extends BaseInput<any> {


}
