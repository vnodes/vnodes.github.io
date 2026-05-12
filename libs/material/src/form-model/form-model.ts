import { AfterViewInit, Component, computed, contentChildren, effect, model, untracked } from '@angular/core';
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
export class FormModelComponent implements AfterViewInit {
  readonly inputChildren = contentChildren<InputModel<any, any>>(InputModel, { descendants: true, })

  inputInstances!: Record<string, InputModel<any, any>>;

  readonly value = model<any>();
  readonly isSubmitted = model<boolean>(false);

  readonly isValid = computed(() => {
    return this.inputChildren().every(e => e.isValid() && e.isTouched())
  })

  readonly isInvalid = computed(() => {
    return this.inputChildren().some(e => e.isInvalid() && e.isTouched())
  })

  readonly isTouched = computed(() => {
    return this.inputChildren().some(e => e.isTouched())
  })

  readonly isDirty = computed(() => {
    return this.inputChildren().some(e => e.isDirty())
  })

  constructor() {
    effect(() => {
      const inputs = this.inputChildren();
      const newValue: Record<string, any> = {};


      inputs.forEach(input => {
        const name = input.name();
        if (name) {
          newValue[name] = input.value();
          input.errorMessages();
        }
      });

      // Update parent model (untracked to avoid infinite loops if two-way)
      untracked(() => {
        this.value.set(newValue);
      });
    });
  }

  ngAfterViewInit(): void {
    const __inputChildren = this.inputChildren();
    this.inputInstances = __inputChildren.reduce((p, c) => ({ ...p, [c.name()]: c }), {});
    __inputChildren.forEach(e => e.isSubmitted = this.isSubmitted)
  }



  setErrors(errors?: Record<string, string[]>) {
    if (errors) {
      const entries = Object.entries(errors)
      for (const [key, value] of entries) {
        this.inputInstances[key].setErrors(value);
      }
    }
  }

  setError(name: string, errorMessages: string[]) {
    this.inputInstances[name]?.setErrors(errorMessages)

  }


  markAsDirty(name: string) {
    this.inputInstances[name]?.isDirty.set(true);
  }
  markAsTouched(name: string) {
    this.inputInstances[name]?.isTouched.set(true);
  }
  markAsValid(name: string) {
    this.inputInstances[name]?.isValid.set(true);
  }
  markAsInvalid(name: string) {
    this.inputInstances[name]?.isInvalid.set(true);
  }


  set(value: Record<string, any>) {
    const entries = Object.entries(value);
    for (const [key, value] of entries) {
      this.inputInstances[key].set(value);
    }
  }

  reset() {
    const values = Object.values(this.inputInstances);
    values.forEach(e => e.reset())
  }



}
