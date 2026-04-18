import { Directive, input, model, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

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
  defaultValue = input<ValueType | null>(null);

  disabled = signal<boolean>(false);

  protected onChange: (value: ValueType | null) => void = () => { };
  protected onTouched: () => void = () => { };



  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log("native value: ", target.value);
    const val = this.convertToValue(target.value);
    console.log("converted value: ", val);
    this.value.set(val);
    this.onChange(val);
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
}




