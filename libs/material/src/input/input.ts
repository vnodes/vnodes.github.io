import { ChangeDetectorRef, Directive, input, model, OnInit, Optional, Self, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export type NumberInputType = 'number' | 'integer';
export type StringInputType = 'text';
export type InputType = NumberInputType | StringInputType

@Directive()
export abstract class BaseInput<ValueType = any, IInputType extends InputType = InputType> implements ControlValueAccessor, OnInit {
  type = input.required<IInputType>()
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  required = input<boolean>(false);
  value = model<ValueType | null>(null);
  disabled = signal<boolean>(false);
  formControl = signal<FormControl>(new FormControl())
  formControlName = signal<string | null>(null)



  protected onChange: (value: ValueType | null) => void = () => { };
  protected onTouched: () => void = () => { };
  protected errors: () => {} = () => ({})


  constructor(
    @Self() @Optional() public readonly ngControl?: NgControl,
    public readonly changeDetection?: ChangeDetectorRef,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;

    }

  }

  handleInput(event: Event): void {

    console.log(this.handleInput.name, '....')
    const target = event.target as HTMLInputElement;
    const cValue = this.convertToValue(target.value);

    // if (cValue && cValue.toString() !== target.value.toString()) {
    // }
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

  ngOnInit(): void {
    if (this.ngControl) {
      this.formControl.update(() => this.ngControl?.control as FormControl);
    }
  }

}




