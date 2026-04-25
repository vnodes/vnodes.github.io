
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@vnodes/material/input';
import { ErrorConstraints } from '@vnodes/material/utils';

@Component({
  selector: 'vn-input[type="date"]',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  template: `
<mat-form-field>
  <mat-label>{{label()}}</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

  `,
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateComponent extends BaseInput<Date> {

  protected override constraints(): ErrorConstraints {
    return {}
  }

  protected override convertToValue(value: string): Date | null {

    if (value) {
      return new Date(value);
    }
    return null;
  }
}
