import { Component } from '@angular/core';
import { FlexModule } from '../flex/flex';
import { FormComponent } from '../form/form';
import { InputNumberComponent } from '../input-number/input-number';
import { InputTextComponent } from '../input-text/input-text';


@Component({
  selector: 'vn-form-sample',
  imports: [FormComponent, InputNumberComponent, InputTextComponent, FlexModule],
  template: `
  <form vnForm vnFlex flexGap="0.3em" >
    <vn-input vnFlexFull type="text" label="text input"></vn-input>
    <vn-input vnFlexGrow="1" type="number" label="number input"></vn-input>
    <vn-input vnFlexGrow="5" type="integer" label="integer input"></vn-input>
  </form>
  `,
  standalone: true,

})
export class FormSampleComponent { }
