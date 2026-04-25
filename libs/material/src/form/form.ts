import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@vnodes/material/flex';

@Component({
  selector: 'vn-form, [vnForm]',
  imports: [FlexModule, MatButtonModule, MatIconModule],
  exportAs: "vnForm",
  template: `
      <div vnFlexCol vnFlexGap>
        <ng-content select="vn-input, [vnInput]"></ng-content>
        <div vnFlexRow vnFlexGap>
          <button mat-raised-button (click)="submit()">{{submitLabel()}}</button>
          <button mat-flat-button (click)="reset()">{{resetLabel()}}</button>
        </div>
      </div>
  `
})
export class FormComponent {
  readonly submitLabel = input<string>("Submit")
  readonly resetLabel = input<string>("Reset")
  readonly formGroup = input.required<FormGroup>();
  readonly formSubmit = output()

  submit() {
    this.formSubmit.emit(this.formGroup().value)
  }

  reset() {
    this.formGroup().reset();
  }
}


