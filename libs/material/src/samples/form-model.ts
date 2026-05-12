import { JsonPipe } from "@angular/common";
import { Component, viewChild } from "@angular/core";
import { FormModelComponent } from "@vnodes/material/form-model";
import { InputModelNumberComponent } from "@vnodes/material/input-model-number";



@Component({
    imports: [InputModelNumberComponent, FormModelComponent, JsonPipe],
    template: `
    FormValue : {{form.value() | json}}
    <form vnForm #form  (formValueChange)="handleChange($event)">
        <vn-input [required]="true" name="first" #inputField type="number" label="First"  ></vn-input>
        <vn-input [required]="true" name="second" #inputField type="number" label="Second" ></vn-input>
    </form>
    <button [disabled]="form.isInvalid()" type="button" (click)="form.isSubmitted.set(true)">Submit</button>
    `
})
export class FormModelSampleComponent {

    form = viewChild<FormModelComponent>("form")

    handleChange(value: any) {
        console.log(value);
    }



}