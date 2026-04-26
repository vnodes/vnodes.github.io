import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, contentChildren, Directive, input, NgModule, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@vnodes/material/flex';
import { BaseInput } from '@vnodes/material/input';

@Directive({ selector: "[vnFormAction]" })
export class FormActionDirective { }


@Component({
  selector: 'vn-form, [vnForm]',
  imports: [FlexModule, MatButtonModule, MatIconModule, CdkTrapFocus,],
  exportAs: "vnForm",
  template: `
      <div vnFlexCol vnFlexGap cdkTrapFocus>
        <ng-content select="vn-input, [vnInput]"></ng-content>
        <div vnFlexRow vnFlexGap>
        
        <!-- Submit button -->
        <button [disabled]="this.formGroup().invalid" type="button" mat-raised-button (click)="submit()">{{submitLabel()}}</button>

          <!-- Reset button -->
         @if(!hideResetButton()){ <button mat-flat-button (click)="reset()">{{resetLabel()}}</button>}

          <!-- Other action buttons -->
          <ng-content select="button[vnFormAction]"></ng-content>
        </div>
      </div>
  `
})
export class FormComponent {

  readonly formInputs = contentChildren<BaseInput>(BaseInput, { descendants: true, })
  readonly submitLabel = input<string>("Submit")
  readonly resetLabel = input<string>("Reset")
  readonly formGroup = input.required<FormGroup>();
  readonly hideResetButton = input<boolean>(false)

  readonly formSubmitEvet = output()


  submit() {
    this.formSubmitEvet.emit(this.formGroup().value)
  }

  reset() {
    this.formGroup().reset();
  }
}


@NgModule({
  imports: [FormComponent, FormActionDirective],
  exports: [FormComponent, FormActionDirective],

})
export class FormModule { }