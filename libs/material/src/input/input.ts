import { Directive, inject, input, model, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { InputValidator } from '@vnodes/material/validators';


export type NumberInputType = 'number' | 'integer';
export type StringInputType = 'text';
export type InputType = (NumberInputType | StringInputType)

@Directive()
export abstract class BaseInput<ValueType = any> implements ControlValueAccessor, OnInit, OnChanges {

  inputValidator = inject(InputValidator);
  // Validators
  required = input<boolean>(false);
  minlength = input<number>(1);
  maxlength = input<number>(400);
  min = input<number>(Number.MIN_SAFE_INTEGER)
  max = input<number>(Number.MAX_SAFE_INTEGER)
  email = input<boolean>(false);
  password = input<boolean>(false);

  // 
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  value = model<ValueType | null>(null);
  disabled = signal<boolean>(false);
  formControl = signal<FormControl>(new FormControl())


  iconPrefix = input<string>()
  iconSuffix = input<string>()
  textPrefix = input<string>()
  textSuffix = input<string>()

  protected onChange: (value: ValueType | null) => void = () => {
    return;
  };

  protected onTouched: () => void = () => {
    return;
  };

  readonly ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  protected abstract convertToValue(value: string): ValueType | null;

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const cValue = this.convertToValue(target.value);
    this.value.set(cValue);
    this.onChange(cValue);
  }

  handleBlur(): void {
    this.onTouched();
  }


  writeValue(value: ValueType): void {
    this.value.set(value);
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

  errorMessage() {
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
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      this.formControl.update(() => this.ngControl?.control as FormControl);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changed: ", this.formControl().value)
  }


}




