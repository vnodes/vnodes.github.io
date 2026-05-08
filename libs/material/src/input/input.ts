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

  inputTestId = input<string>();
  labelTestId = input<string>()
  inputValidator = inject(InputValidator);

  // Validators
  required = input<boolean>(false);
  minlength = input<number>(1);
  maxlength = input<number>(400);
  minitems = input<number>(0)
  maxitems = input<number>(Number.MAX_SAFE_INTEGER)
  min = input<number>(Number.MIN_SAFE_INTEGER)
  max = input<number>(Number.MAX_SAFE_INTEGER)
  email = input<boolean>(false);
  password = input<boolean>(false);

  options = input<InputOption<ValueType>[]>();
  multiple = input<boolean>(false);

  // 
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  defaultValue = input<ValueType | null>(null)

  disabled = signal<boolean>(false);
  formControl = signal<FormControl>(new FormControl())


  iconPrefix = input<string>()
  iconSuffix = input<string>()
  textPrefix = input<string>()
  textSuffix = input<string>()


  protected onChange: (value: ValueType | null) => void = () => {
    // 
  };
  protected onTouched: () => void = () => {
    // 
  };

  readonly ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  writeValue(value: ValueType): void {
    // this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected errorMessage() {
    const errors = this.formControl().errors;
    if (errors) {
      const [constraint, constraintValue] = Object.entries(errors)[0];
      return this.inputValidator.errorMessage(this.formControl().value, constraint, constraintValue)
    }

    return null
  }


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

  protected setDefaultValue(control: FormControl, value: ValueType) {
    control.setValue(value, { emitEvent: false })

  }

}




