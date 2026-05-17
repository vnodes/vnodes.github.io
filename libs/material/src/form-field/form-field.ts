import { Component, computed, inject, Injectable, input, model, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTimepicker, MatTimepickerInput, MatTimepickerToggle } from "@angular/material/timepicker";
import { Icon } from '@vnodes/material/common';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { NumberFilterDirective } from '@vnodes/material/number-filter';




@Injectable()
export class FormFieldErrorStateMatcher implements ErrorStateMatcher {
  protected readonly formField = inject(FormFieldComponent)
  isErrorState(): boolean {

    return !!this.formField.isTouched() && !!this.formField.validationErrors()
  }
}

export type FormFieldOption = {
  id?: any;
  value: any
  label?: string;
  icon?: Icon;
  avatar?: string;
  disabled?: boolean
  title?: string;
}

export type FormFieldType =
  | 'text'
  | "textarea"
  | 'tel'
  | 'email'
  | 'url'

  | 'number'
  | 'integer'

  | 'checkbox'
  | 'radio'
  | 'list'
  | 'buttons'

  | 'slide'
  | 'select'
  | 'autocomplete'

  | 'date'
  | 'time'





@Component({
  selector: 'vn-field',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    NumberFilterDirective,
    FieldsetComponent,
    MatTimepickerInput,
    MatTimepicker,
    MatTimepickerToggle,
    MatButtonToggleModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: ErrorStateMatcher, useClass: FormFieldErrorStateMatcher }
  ],
  templateUrl: "./form-field.html"
})
export class FormFieldComponent implements OnInit {

  isInvalid = computed<boolean>(() => {
    return !!this.isTouched() && !!this.validationErrors()
  })

  control = new FormControl(null);

  type = input<FormFieldType>('text');
  decimals = input<number>(6);

  id = input<string | null>(null);
  name = input.required<string>();
  label = input<string | null>(null);
  labelPosition = input<'before' | 'after'>('after')
  placeholder = input<string | null>();
  hint = input<string | null>(null);
  disabled = input<boolean>(false);

  timeInterval = input<string>('5m')


  options = input<FormFieldOption[] | null>(null)

  multiple = input<boolean | null>(null);
  hideSingleSelectionIndicator = input<boolean | null>(null)

  filteredValue = signal<string>('');
  filteredOptions = computed(() => {
    return this.options()?.filter(e => e.value.startsWith(this.filteredValue()))
  })


  /** Suffix/Prefix */

  suffixText = input<string | null>(null);
  prefixText = input<string | null>(null);
  suffixIcon = input<Icon | null>(null);
  prefixIcon = input<Icon | null>(null);


  /** Valiation options  */
  required = input<boolean>(false);

  minlength = input<number>(0)
  maxlength = input<number>(1000)

  minDate = input<Date | null>(null);
  maxDate = input<Date | null>(null);
  min = input<number | null>(null)
  max = input<number | null>(null)



  // Value and value validation
  defaultValue = input<any>(null);
  value = model<any>(null);

  isTouched = model<boolean | null>(null);



  validationErrors = computed<string | null>(() => {

    const __value = this.value();
    const __required = this.required();
    const __minlength = this.minlength();
    const __maxlength = this.maxlength();
    const __min = this.min();
    const __max = this.max();

    const isUndefinedOrEmpty = __value === undefined || __value === null || __value === '';

    console.log("isUndefinedOrEmpty:", isUndefinedOrEmpty, __value)
    if (isUndefinedOrEmpty) {
      if (__required === true) {
        return 'Field is required'
      }
      return null;
    }

    if (__max != undefined) {
      if (__value > __max) {
        return `Must be less than or equal to ${__max}`;
      }
    }


    if (__min != undefined) {
      if (__value < __min) {
        return `Must be more than or equal to ${__min}`;
      }
    }

    if (__minlength != undefined) {
      if (__value.length < __minlength) {
        return `At least ${__minlength} characters`
      }
    }

    if (__maxlength != undefined) {
      if (__value.length > __maxlength) {
        return `At most ${__maxlength} characters`
      }
    }

    return null;
  })




  protected handleTouchEvent() {
    this.isTouched.set(true);
  }

  protected handleInputEventForAutocomplete(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filteredValue.set(inputValue);
  }

  protected handleInputEvent(event: Event) {

    const inputValue = (event.target as HTMLInputElement).value;
    this.handleValueChange(inputValue);


  }

  protected handleSelectValueChange(event: MatSelectChange) {
    this.handleValueChange(event.value)
  }

  protected handleValueChange(value: any) {
    this.value.set(value);
  }



  ngOnInit(): void {
    const __defaultValue = this.defaultValue();
    if (__defaultValue !== undefined && __defaultValue !== null) {
      this.value.set(__defaultValue);
      this.control.setValue(__defaultValue);
    }
  }




}
