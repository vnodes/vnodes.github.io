import { Component } from '@angular/core';
import { InputModel } from '@vnodes/material/input-model';

@Component({
  selector: 'vn-input-model-text',
  imports: [],
  template: `<p>input-model-text</p>`,
  providers: [{ provide: InputModel, useExisting: InputModelTextComponent }]
})
export class InputModelTextComponent { }
