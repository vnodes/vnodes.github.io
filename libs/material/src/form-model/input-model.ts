import { computed, Directive, inject, input, model } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Icon } from '@vnodes/material/common';
import { FormModelComponent } from './form-model';

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




/**
 * Base model base input component
 */
@Directive({ selector: "[vnInput]" })
export class InputModelDirective<ValueType, TInputTYpe extends InputType> {
  readonly formModel = inject(FormModelComponent, { optional: true })

  name = input.required<string>();
  type = input.required<TInputTYpe>()
  inputmode = computed<HTMLInputElement['inputMode']>(() => {
    if (this.type() === 'integer') {
      return 'numeric'
    } else if (this.type() === 'number') {
      return 'decimal'
    }
    return 'text';
  })
  value = model<ValueType | null>();
  disabled = model<boolean>(false)


  label = input<string>();
  hint = input<string>();

  iconPrefix = input<Icon>();
  iconSuffix = input<Icon>();
  textPrefix = input<string>();
  textSuffix = input<string>();

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

  pattern = input<string | null>(null)

  /**
   * Number of decimal allowed
   */
  decimals = input<number>(6);

  // Input states 

  isDirty = model<boolean>(false);
  isTouched = model<boolean>(false);
  isPending = model<boolean>(false);
  isValid = model<boolean>(false);
  isInvalid = model<boolean>(true);

  isSubmitted = computed(() => {
    return !!this.formModel?.isSubmitted()
  })

  errorMessages = computed(() => {
    const name = this.name()
    const errors = this.formModel?.errors();
    if (name && errors) {
      return errors[name]
    }
  });

  readonly errorStateMatcher: ErrorStateMatcher = {
    isErrorState: () => {
      return this.isTouched() && this.isInvalid()
    }
  }





  reset() {
    this.isDirty.set(false);
    this.isTouched.set(false);
    this.isValid.set(false);
    this.isInvalid.set(false);
    this.value.set(null)
  }


  set(value: ValueType | null | undefined) {
    this.value.set(value);
  }

  resetValidation() {
    this.isValid.set(true);
    this.isInvalid.set(false);
  }


  disable() {
    this.disabled.set(true);
  }

  handleTouchEvent(event: Event) {
    this.isTouched.set(true);
  }

  handleClickEvent(event: Event) {
    this.isTouched.set(true);
  }

  handleInputEvent(event: Event) {
    this.isDirty.set(true)
  }

}
