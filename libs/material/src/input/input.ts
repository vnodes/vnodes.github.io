import { Directive, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class InputComponent<T = any> implements ControlValueAccessor {

  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  required = input<boolean>(false);


  value = signal<T | null>(null);
  disabled = signal<boolean>(false);


  protected onChange: (value: T | null) => void = () => { };
  protected onTouched: () => void = () => { };


  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const val = this.convertToValue(target.value);
    this.value.set(val);
    this.onChange(val);
  }

  handleBlur(): void {
    this.onTouched();
  }


  protected abstract convertToValue(value: string): T | null;


  writeValue(value: T): void {
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