import { ChangeDetectorRef, Directive, inject, input, model, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { ErrorConstraints, ErrorMessageRegistry } from '@vnodes/material/utils';

export type NumberInputType = 'number' | 'integer';
export type StringInputType = 'text';
export type InputType = (NumberInputType | StringInputType)

@Directive()
export abstract class BaseInput<ValueType = any> implements ControlValueAccessor, OnInit, OnChanges {
  errorMessageRegistry = inject(ErrorMessageRegistry);
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  required = input<boolean>(false);
  value = model<ValueType | null>(null);
  disabled = signal<boolean>(false);
  formControl = signal<FormControl>(new FormControl())
  formControlName = signal<string | null>(null)

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
  protected abstract constraints(): ErrorConstraints;


  readonly changeDetection = inject(ChangeDetectorRef);
  readonly ngControl = inject(NgControl, { self: true, optional: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const cValue = this.convertToValue(target.value);
    this.value.set(cValue);
    this.onChange(cValue);
  }





  handleBlur(): void {
    this.onTouched();
  }

  protected abstract convertToValue(value: string): ValueType | null;

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
    const value = this.formControl().value;
    if (errors) {
      const constraint = Object.entries(errors)[0][0]
      return this.errorMessageRegistry.resolve(value, constraint, this.constraints())
    }
    return null
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




