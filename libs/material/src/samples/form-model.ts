import { JsonPipe } from "@angular/common";
import { AfterViewInit, Component, ComponentRef, viewChild } from "@angular/core";
import { FormModelComponent } from "@vnodes/material/form-model";
import { InputModelNumberComponent } from "@vnodes/material/input-model-number";



@Component({
    imports: [InputModelNumberComponent, FormModelComponent, JsonPipe],
    template: `
    {{form.value() | json}}
    <form vnForm #form  (formValueChange)="handleChange($event)">
        <vn-input name="first" #inputField type="number" label="First"  ></vn-input>
        <vn-input name="second" #inputField type="number" label="Second" ></vn-input>
    </form>
    `
})
export class FormModelSampleComponent implements AfterViewInit {

    form = viewChild<ComponentRef<FormModelComponent>>("form")




    handleChange(value: any) {
        console.log(value);
    }


    ngAfterViewInit(): void {
        this.form()?.instance.setErrors({ first: "First error" })
    }
}