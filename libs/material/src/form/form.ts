import { Component, Directive, input, NgModule, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@vnodes/material/flex';



@Directive({ selector: "[vnFormAction]" })
export class FormActionDirective { }

@Component({
  selector: 'vn-form, [vnForm]',
  imports: [FlexModule, MatButtonModule, MatIconModule],
  exportAs: "vnForm",
  template: `
      <div vnFlexCol vnFlexGap>
        <ng-content select="vn-input, [vnInput]"></ng-content>
        <div vnFlexRow vnFlexGap>
        
        <!-- Submit button -->
        <button type="button" mat-raised-button (click)="submit()">{{submitLabel()}}</button>

          <!-- Reset button -->
         @if(!hideResetButton()){ <button mat-flat-button (click)="reset()">{{resetLabel()}}</button>}

          <!-- Other action buttons -->
          <ng-content select="button[vnFormAction]"></ng-content>
        </div>
      </div>
  `
})
export class FormComponent {
  readonly submitLabel = input<string>("Submit")
  readonly resetLabel = input<string>("Reset")
  readonly formGroup = input.required<FormGroup>();
  readonly formSubmit = output()

  readonly hideResetButton = input<boolean>(false)

  submit() {
    this.formSubmit.emit(this.formGroup().value)
  }

  reset() {
    this.formGroup().reset();
    const controls = Object.values(this.formGroup().controls);
    for (const c of controls) {
      c.reset();
      c.setErrors(null)
    }
  }
}


@NgModule({
  imports: [FormComponent, FormActionDirective,],
  exports: [FormComponent, FormActionDirective]
})
export class FormModule { }