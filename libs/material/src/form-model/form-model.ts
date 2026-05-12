import { Component, computed, contentChildren, model, NgModule, signal } from '@angular/core';
import { InputModelDirective } from './input-model';

@Component({
  selector: 'vn-form, [vnForm]',
  exportAs: "vnForm",
  template: `
      <form vnFlexCol vnFlexGap>
        <ng-content select="[vnInput]"></ng-content>
      </form>
  `
})
export class FormModelComponent {

  readonly errors = model<any>();

  readonly inputs = contentChildren(InputModelDirective)
  readonly value = model<any>();
  readonly isSubmitted = signal<boolean>(false);

  readonly isValid = computed(() => {
    return this.inputs().every(e => e.isValid() && e.isTouched())
  })

  readonly isInvalid = computed(() => {
    return this.inputs().some(e => e.isInvalid() && e.isTouched())
  })

  readonly isTouched = computed(() => {
    return this.inputs().some(e => e.isTouched())
  })

  readonly isDirty = computed(() => {
    return this.inputs().some(e => e.isDirty())
  })

  getInput(name: string) {
    return this.inputs().find(e => e.name() === name)

  }

  markAsDirty(name: string) {
    this.getInput(name)?.isDirty.set(true);
  }

  markAsTouched(name: string) {
    this.getInput(name)?.isTouched.set(true);
  }

  markAsValid(name: string) {
    this.getInput(name)?.isValid.set(true);
  }

  markAsInvalid(name: string) {
    this.getInput(name)?.isInvalid.set(true);
  }


  set(value: Record<string, any>) {
    const entries = Object.entries(value);
    for (const [key, value] of entries) {
      this.getInput(key)?.set(value);
    }
  }

  reset() {
    this.inputs().forEach(e => e.reset())
  }





}


@NgModule({
  imports: [FormModelComponent, InputModelDirective],
  exports: [FormModelComponent, InputModelDirective]

})
export class FormModelModule { }