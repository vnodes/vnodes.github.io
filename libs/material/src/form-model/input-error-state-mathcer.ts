import { Provider } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import { FormModelComponent } from "./form-model";
import { InputModelDirective } from "./input-model";

export class InputErrorStateMathcer implements ErrorStateMatcher {
    constructor(protected readonly form: FormModelComponent, protected readonly input: InputModelDirective<any, any>) { }
    isErrorState(): boolean {
        return this.form.isSubmitted() && this.input.isTouched() && this.input.isInvalid()
    }
}


export function provideErrorStateMatcher(): Provider {
    return {
        provide: InputErrorStateMathcer,
        useValue: InputErrorStateMathcer
    }
}