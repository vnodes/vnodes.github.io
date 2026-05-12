import { JsonPipe } from "@angular/common";
import { Component, viewChild } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { FormModelComponent, FormModelModule } from "@vnodes/material/form-model";
import { InputModelNumberComponent } from "@vnodes/material/input-model-number";



@Component({
    imports: [InputModelNumberComponent, FormModelModule, MatButton, JsonPipe],
    template: `
    FormValue : {{form.value() | json}}<br>
    IsSubmited: {{form.isSubmitted()}}<br>
    isTouched: {{form.isTouched()}}<br>
    isDirty: {{form.isDirty()}}<br>
    -----------------
    <form vnForm #form  (formValueChange)="handleChange($event)">
        <vn-input vnInput  [required]="true" name="first" #inputField type="number" label="First"  ></vn-input>
        <vn-input vnInput [required]="true" name="second" #inputField type="number" label="Second" ></vn-input>
    </form>
    <button  matButton  type="button" (click)="handleSubmit()">Submit</button>
    <button matButton (click)="setErrors()">Set Errors</button>
    `,


})
export class FormModelSampleComponent {

    form = viewChild<FormModelComponent>("form");

    handleChange(value: any) {
        console.log("Change: ", value);
    }

    setErrors() {
        try {


            this.form()?.errors.set({ first: ["First error"] })




        } catch {
            console.error("-------------------__ERror here-------------")
        }
    }

    handleSubmit() {
        console.log("Submittin form: ")
        this.form()?.isSubmitted.set(true);
        this.form()!.inputs().forEach(e => {
            console.log("passing the submitted to ", e.name())
        });
    }


}