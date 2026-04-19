import { ChangeDetectorRef, Directive, input, model, Optional, Self, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export type NumberInputType = 'number' | 'integer';
export type StringInputType = 'text';
export type InputType = NumberInputType | StringInputType

@Directive()
export abstract class BaseInput<ValueType = any, IInputType extends InputType = InputType> implements ControlValueAccessor {
  type = input.required<IInputType>()
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  required = input<boolean>(false);
  value = model<ValueType | null>(null);
  disabled = signal<boolean>(false);
  formControl = signal<FormControl>(new FormControl())

  protected onChange: (value: ValueType | null) => void = () => { };
  protected onTouched: () => void = () => { };
  protected errors: () => {} = () => ({})


  constructor(
    @Self() @Optional() public readonly ngControl?: NgControl,
    public readonly changeDetection?: ChangeDetectorRef,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      this.formControl.update(() => this.ngControl?.control as FormControl);
    }

  }

  ngOnInit(): void {
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


  detect() {
    this.changeDetection?.detectChanges();
  }

}




