import { Component, model, signal } from '@angular/core';


@Component({
  selector: 'vn-form, [vnForm]',
  exportAs: "vnForm",
  template: `
      <form vnFlexCol vnFlexGap>
        <ng-content ></ng-content>
      </form>
  `
})
export class FormModelComponent {
  // readonly inputs = contentChildren(FormFieldComponent, { descendants: true })
  readonly validationErrors = model<Record<string, string[]>>();
  readonly value = model<any>();
  readonly isSubmitted = signal<boolean>(false);

}
