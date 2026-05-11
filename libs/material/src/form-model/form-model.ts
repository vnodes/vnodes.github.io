import { Component, contentChildren, effect, model, untracked } from '@angular/core';
import { FlexModule } from '@vnodes/material/flex';
import { InputModel } from '@vnodes/material/input-model';

@Component({
  selector: 'vn-form, [vnForm]',
  imports: [FlexModule,],
  exportAs: "vnForm",
  template: `
      <form vnFlexCol vnFlexGap>
        <ng-content select="vn-input, [vnInput], vn-input-field, [vnInputField]"></ng-content>
      </form>
  `
})
export class FormModelComponent {
  readonly inputs = contentChildren<InputModel<any, any>>(InputModel, { descendants: true, })


  readonly value = model();

  constructor() {


    effect(() => {
      const inputs = this.inputs();
      const newValue: Record<string, any> = {};

      inputs.forEach(input => {
        const name = input.name();
        if (name) {
          newValue[name] = input.value();
        }
      });

      // Update parent model (untracked to avoid infinite loops if two-way)
      untracked(() => {
        this.value.set(newValue);
      });
    });
  }


  setErrors(errors?: Record<string, string | string[]>) {

    this.inputs().forEach(e => {
      if (errors) {
        const errorMessage = errors[e.name()];
        if (errorMessage) {
          e.errorMessages.set([errorMessage].flatMap(e => e))
        }
      } else {
        e.errorMessages.set(undefined)
      }
    })

  }
}
