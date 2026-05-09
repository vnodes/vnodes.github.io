import { Directive, inject, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { InputValidator, isDefined } from '@vnodes/material/validators';


export type NumberInputType = 'number' | 'integer';
export type StringInputType = 'text';
export type InputType = (NumberInputType | StringInputType);

export type InputOption<T = any> = {
  id?: string;
  label: string;
  value: T;
}


@Directive()
export abstract class BaseInput<ValueType = any> implements ControlValueAccessor, OnInit {

  /**
   * Custom validators built on top of Validators class. 
   */
  inputValidator = inject(InputValidator);

  // Validators

  /**
   * Mark field as requried
   */
  required = input<boolean>(false);
  /**
   * Enforce minimum length 
   */
  minlength = input<number>(1);

  /**
   * Enforce maximum length
   */
  maxlength = input<number>(400);

  /**
   * Enforce minimum items for list inputs
   */
  minitems = input<number>(0)
  /**
   * Enforce maximum items for list inputs
   */
  maxitems = input<number>(Number.MAX_SAFE_INTEGER)

  /**
   * Enforce minimum number value 
   */
  min = input<number>(Number.MIN_SAFE_INTEGER)
  /**
   * Enforce maximum number value 
   */
  max = input<number>(Number.MAX_SAFE_INTEGER)

  /**
   * Enforce email pattern matching
   */
  email = input<boolean>(false);

  /**
   * Enforce password pattern matching
   */
  password = input<boolean>(false);


  /**
   * Options for selectable inputs such as select, autocomplete, button-toggle, radio and so on
   */
  options = input<InputOption<ValueType>[]>();

  /**
   * Allow multiple selection for selectable components
   */
  multiple = input<boolean>(false);

  // 
  /**
   * Input label 
   */
  label = input<string>('');

  /**
   * Input placeholder
   */
  placeholder = input<string>('');

  /**
   * Input value hints/explanations/format/pattern etc.
   */
  hint = input<string>('');

  /**
   * Default input value
   */
  defaultValue = input<ValueType | null>(null)


  /**
   * Define the input field disabled or enabled
   */
  disabled = signal<boolean>(false);

  /**
   * Reactive FormControl instance
   */
  formControl = signal<FormControl>(new FormControl())

  /**
   * Prefix icon
   */
  iconPrefix = input<string>()

  /**
   * Suffix icon
   */
  iconSuffix = input<string>()

  /**
   * Prefix text
   */
  textPrefix = input<string>()

  /**
   * Suffix text
   */
  textSuffix = input<string>()


  protected onChange: (value: ValueType | null) => void = () => {
    // 
  };
  protected onTouched: () => void = () => {
    // 
  };

  writeValue(value: ValueType): void {
    // const control = this.formControl();
    // if (control && control.value !== value) {
    //   control.setValue(value, { emitEvent: false });
    // }
  }
  readonly ngControl = inject(NgControl, { self: true, optional: true });


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }


  /**
   * Resolve error message from formControl errors
   * @returns error message
   */
  protected errorMessage() {
    const errors = this.formControl().errors;
    if (errors) {
      const [constraint, constraintValue] = Object.entries(errors)[0];
      return this.inputValidator.errorMessage(this.formControl().value, constraint, constraintValue)
    }

    return null
  }


  /**
   * Reset the form control
   */
  reset() {
    this.formControl().reset();
    this.formControl().setErrors(null);
  }


  ngOnInit(): void {
    this.__setValueAccessor();
    this.__setDefaultValue()
  }


  private __setValueAccessor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private __setDefaultValue() {
    const __control = this.ngControl?.control as FormControl

    if (isDefined(__control)) {
      this.formControl.update(() => __control as FormControl);

      const __defaultValue = this.defaultValue();
      if (isDefined(__defaultValue)) {
        this.setDefaultValue(__control, __defaultValue)
      }
    }
  }


  /**
   * Set value to the form control without firing event
   * @param control 
   * @param value 
   */
  protected setDefaultValue(control: FormControl, value: ValueType) {
    control.setValue(value, { emitEvent: false })

  }

}




