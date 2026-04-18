import { Component } from '@angular/core';
import { BaseInput } from '../input/input';

@Component({
  selector: 'vn-input-text',
  imports: [],
  template: `<p>input-text works!</p>`,
  standalone: true,
  styles: ``,
})
export class InputTextComponent extends BaseInput {

  protected override convertToValue(value: string) {
    return value
  }
}
