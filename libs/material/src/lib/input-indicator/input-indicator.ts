import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'vn-text-input-indicator',
  template: `<span>{{indicator()}}</span>`,
  host: {
    class: "ml-2"
  }
})
export class TextInputIndicator {
  maxLength = input<number>(0);
  minLength = input<number>(4000);
  required = input<boolean>(false);
  value = input<string>()

  isValid = computed(() => {
    const currentValue = this.value();
    if (currentValue) {
      return currentValue.length > this.minLength() && currentValue.length < this.maxLength()
    } else {

      return !this.required()
    }
  })

  indicator = computed(() => {
    return `(${this.value()?.length}/${this.maxLength()})`
  })
}

@Component({
  selector: 'vn-number-input-indicator',
  template: `
  <span [class.text-red-800]="!isValid()">{{indicator()}}</span>
  `
})
export class NumberInputIndicator {
  min = input<number>(0);
  max = input<number>(4000);
  value = input<number>()

  required = input<boolean>(false);

  isValid = computed(() => {
    const currentValue = this.value();
    if (currentValue) {
      return currentValue > this.max() && currentValue < this.min()
    } else {
      return !this.required()
    }
  })

  indicator = computed(() => {
    return `(${this.max()}/${this.min()})`
  })
}
