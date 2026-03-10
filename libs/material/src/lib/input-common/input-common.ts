import { CommonModule } from "@angular/common";
import { Component, input, model, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";




const _inputCommonModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
]

@NgModule({
    imports: [_inputCommonModules],
    exports: [_inputCommonModules]
})
export class InputCommonModule { }

@Component({
    imports: _inputCommonModules,
    selector: "vn-input-common",
    template: '<span>Abstract component</span>'
})
export class InputCommon<T> {
    label = input()
    hint = input()
    prefixText = input();
    prefixIcon = input();
    suffixText = input();
    suffixIcon = input();
    required = input(false)
    errors = input<string[]>()
    value = model<T>();
}