import { Directive, effect, input, model, ModelSignal } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Icon } from '@vnodes/material/common';

export class FormModelErrorStateMatcher implements ErrorStateMatcher {
  constructor(private isInvalid: () => boolean, private isTouched: () => boolean) { }
  isErrorState(): boolean {
    return this.isInvalid() && this.isTouched();
  }
}


export type InputType =
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'time'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'list'
  | 'buttons'
  | 'slider'
  | 'slider';


@Directive()
export abstract class InputModel<ValueType, TInputTYpe extends InputType> {
  name = input.required<string>();
  type = input.required<TInputTYpe>()
  value = model<ValueType | null>();
  label = input<string>();
  hint = input<string>();


  disabled = model<boolean>(false)

  iconPrefix = input<Icon>();
  iconSuffix = input<Icon>();
  textPrefix = input<string>();
  textSuffix = input<string>();

  constructor() {

    effect(() => {
      const __value = this.value()
      if (__value !== undefined && __value !== null) {
        this.resetValidation();

        // TODO: move this from here becuase this effect run at least once.

      }
    })
  }

  readonly matcher = new FormModelErrorStateMatcher(
    () => this.isInvalid(),
    () => this.isTouched()
  );

  required = input<boolean>(false);
  /**
   * Minimum length for text and number of items for multiple inputs
   */
  minlength = input<number>(0);

  /**
   * Maximum length for text and number of items for multiple inputs
   */
  maxlength = input<number>(1000);

  /**
   * Minimum value allowed
   */
  min = input<number>(Number.MIN_SAFE_INTEGER);

  /**
   * Maximum value allowed
   */
  max = input<number>(Number.MAX_SAFE_INTEGER);
  /**
   * Number of decimal allowed
   */
  decimals = input<number>(6);

  /**
   * Is input a strong password
   */
  isStrongPassword = input<boolean>(false)

  /**
   * Is input a valid email address
   */
  isEmail = input<boolean>(false)


  isDirty = model<boolean>(false);
  isTouched = model<boolean>(false);
  isPending = model<boolean>(false);
  isValid = model<boolean>(false);
  isSubmitted?: ModelSignal<boolean>;
  isInvalid = model<boolean>(false);

  errorMessages = model<string[] | null>();

  reset() {
    this.isDirty.set(false);
    this.isTouched.set(false);
    this.isValid.set(false);
    this.isInvalid.set(false);
    this.errorMessages.set(null);
    this.value.set(null)

    this.isSubmitted?.set(false);
  }


  markAsDirty() {
    this.isDirty.set(true);
  }
  markAsTouched() {
    this.isTouched.set(true);
  }
  markAsValid() {
    this.isValid.set(true);
  }
  markAsSubmitted() {
    this.isSubmitted?.set(true);
  }
  markAsInvalid() {
    this.isInvalid.set(true);
  }

  set(value: ValueType | null | undefined) {
    this.value.set(value);
  }

  resetValidation() {
    this.isValid.set(true);
    this.isInvalid.set(false);
    this.resetErrors();
  }
  resetErrors() {
    this.errorMessages.set(null)
  }

  setErrors(errors: string[]) {
    this.errorMessages.set(errors);
  }

  disable() {
    this.disabled.set(true);
  }

  handleInputEvent(event: Event) {
    this.markAsTouched();
  }
}
