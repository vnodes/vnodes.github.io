import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, contentChildren, Directive, input, NgModule, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@vnodes/material/flex';
import { BaseInput } from '@vnodes/material/input';


/**
 * Positional directive to define the form action buttons location
 */
@Directive({ selector: "[vnFormAction]" })
export class FormActionDirective { }

/**
 * Form container component that renders input components and form actions
 */
@Component({
  selector: 'vn-form, [vnForm]',
  imports: [FlexModule, MatButtonModule, MatIconModule, CdkTrapFocus,],
  exportAs: "vnForm",
  template: `
      <div vnFlexCol vnFlexGap cdkTrapFocus>
        <ng-content select="vn-input, [vnInput], vn-input-field, [vnInputField]"></ng-content>
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

  /**
   * List of input components
   */
  readonly formInputs = contentChildren<BaseInput>(BaseInput, { descendants: true, })
  /**
   * Submit button label 
   */
  readonly submitLabel = input<string>("Submit")

  /**
   * Reset button label
   */
  readonly resetLabel = input<string>("Reset")

  /**
   * Reactive form group instance
   */
  readonly formGroup = input.required<FormGroup>();

  /**
   * Hide reset button
   */
  readonly hideResetButton = input<boolean>(false)

  /**
   * Event to fire when the submit button is clicked.
   */
  readonly formSubmitEvet = output()


  /**
   * Smit the form value
   */
  submit() {
    this.formSubmitEvet.emit(this.formGroup().value)
  }


  /**
   * Reset the form value
   */
  reset() {
    this.formGroup().reset();
  }
}


/**
 * Form module that provides {@link FormComponent} and {@link FormActionDirective}
 */
@NgModule({
  imports: [FormComponent, FormActionDirective],
  exports: [FormComponent, FormActionDirective],

})
export class FormModule { }