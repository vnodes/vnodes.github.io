import { Directive, input, model } from '@angular/core';
import { Icon } from '@vnodes/material/common';


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
export class InputModel<ValueType, TInputTYpe extends InputType> {
  name = input<string>();
  type = input.required<TInputTYpe>()
  value = model<ValueType | null>(null);
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
  isValid = model<boolean>(false);
  isSubmitted = model<boolean>(false)
  isInvalid = model<boolean>(false);

  errorMessages = model<string[] | undefined>(undefined);
}
