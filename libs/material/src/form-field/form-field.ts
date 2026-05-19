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
import { GaugeComponent } from '@vnodes/material/gauge';
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


export const FormFieldTypes = {
  'text': 'text',
  "textarea": "textarea",
  'tel': 'tel',
  'email': 'email',
  'url': 'url',
  'number': 'number',
  'integer': 'integer',
  'checkbox': 'checkbox',
  'radio': 'radio',
  'list': 'list',
  'buttons': 'buttons',
  'slide': 'slide',
  'select': 'select',
  'autocomplete': 'autocomplete',
  'date': 'date',
  'time': 'time',
  'gauge': 'gauge',
} as const

export type FormFieldType = keyof typeof FormFieldTypes

/**
 * Generic input componentF
 */
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
    GaugeComponent
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: ErrorStateMatcher, useClass: FormFieldErrorStateMatcher }
  ],
  templateUrl: "./form-field.html"
})
export class FormFieldComponent implements OnInit {

  /**
   * Computed boolean signal defining invalid status
   */
  isInvalid = computed<boolean>(() => {
    return !!this.isTouched() && !!this.validationErrors()
  })

  /**
   * Only for internal usage to satisfiy the mat-input
   */
  control = new FormControl(null);

  /**
   * Input type
   */
  type = input<FormFieldType>('text');


  /**
   * Number of allowed decimals
   */
  decimals = input<number>(6);

  /**
   * Optional id
   */
  id = input<string | null>(null);

  /**
   * Input name
   */
  name = input.required<string>();

  /**
   * Input description
   */
  label = input<string | null>(null);

  /**
   * Label position for checkbox input
   */
  labelPosition = input<'before' | 'after'>('after')

  /**
   * Placeholder
   */
  placeholder = input<string | null>();

  /**
   * Detailed input description 
   */
  hint = input<string | null>(null);

  /**
   * Defines disabled and enabled input state.
   */
  disabled = input<boolean>(false);



  /**
   * Radius of the gauge input
   */
  radius = input(80);

  /**
   * Stroke width of the gauge input
   */
  strokeWidth = input(16);

  /**
   * Box size of the gauge input
   */
  viewBoxSize = input(200);


  /**
   * Time interval for time inputs such as "5m", "5h"
   */
  timeInterval = input<string>('5m')


  /**
   * List of options for multi select inputs such as "autocomplete", "select", "list" etc.
   */
  options = input<FormFieldOption[] | null>(null)


  /**
   * Defines the input is multiple or single
   */
  multiple = input<boolean | null>(null);

  /**
   * Hides the selection indicator of "buttons", "list", and "select" inputs
   */
  hideSingleSelectionIndicator = input<boolean | null>(null)

  /**
   * Internal filtered value for "autocomplte" input
   */
  filteredValue = signal<string>('');

  /**
   * Internal filtered options for "autocomplte" input
   */
  filteredOptions = computed(() => {
    return this.options()?.filter(e => e.value.startsWith(this.filteredValue()))
  })



  /**
   * Suffix text
   */
  suffixText = input<string | null>(null);

  /**
   * Prefix text
   */
  prefixText = input<string | null>(null);

  /**
   * Suffix icon
   */
  suffixIcon = input<Icon | null>(null);

  /**
   * Prefix icon
   */
  prefixIcon = input<Icon | null>(null);


  /**
   * Defines the input is either requried or optional (default false)
   */
  required = input<boolean>(false);

  /**
   * Minimum allowed length for text, and size for multi select inputs
   */
  minlength = input<number>(0)

  /**
   * Maximum allowed length for text, and size for multi select inputs
   */
  maxlength = input<number>(1000)

  /**
   * Minimum allowed date
   */
  minDate = input<Date | null>(null);

  /**
   * Maximum allowed date
   */
  maxDate = input<Date | null>(null);


  /**
   * Minimum allowed number
   */
  min = input<number | null>(null)

  /**
   * Maximum allowed number
   */
  max = input<number | null>(null)



  /**
   * Default value
   */
  defaultValue = input<any>(null);


  /**
   * Value model signal which also create `valueChange` output.
   */
  value = model<any>(null);


  /**
   * Controls the input element is touched or not
   */
  isTouched = signal<boolean | null>(null);



  /**
   * Validation error messages
   */
  validationErrors = computed<string | null>(() => {

    const __value = this.value();
    const __required = this.required();
    const __minlength = this.minlength();
    const __maxlength = this.maxlength();
    const __min = this.min();
    const __max = this.max();

    const isUndefinedOrEmpty = __value === undefined || __value === null || __value === '';


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




  /**
   * Handle the touch event
   */
  protected handleTouchEvent() {
    this.isTouched.set(true);
  }


  /**
   * Handle input event sepecifically for autocomplte input
   * @param event 
   */
  protected handleInputEventForAutocomplete(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filteredValue.set(inputValue);
  }


  /**
   * Handle input event, emit changes 
   * @param event 
   */
  protected handleInputEvent(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.handleValueChange(inputValue);
  }

  /**
   * Handle input event for "select" inputs
   */
  protected handleSelectValueChange(event: MatSelectChange) {
    this.handleValueChange(event.value)
  }


  /**
   * Handle the value change 
   */
  protected handleValueChange(value: any) {
    this.value.set(value);
  }


  /**
   * Reset input 
   */
  reset() {
    this.filteredValue.set('');
    this.control.reset();
    this.control.markAsUntouched();
    this.value.set(this.defaultValue());
    this.isTouched.set(false);
  }


  ngOnInit(): void {
    const __defaultValue = this.defaultValue();
    if (__defaultValue !== undefined && __defaultValue !== null) {
      this.value.set(__defaultValue);
      this.control.setValue(__defaultValue);
    }
  }




}
