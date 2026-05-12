import { Component } from '@angular/core';
import { InputModelDirective } from '@vnodes/material/form-model';

@Component({
  selector: 'vn-input[type="text"]',
  template: `<p>input-model-text</p>`,
})
export class InputModelTextComponent extends InputModelDirective<string, 'text'> { }
