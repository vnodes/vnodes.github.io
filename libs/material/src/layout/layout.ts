import { Directive, input } from "@angular/core";

export type LayoutType = 'app' | 'web';

@Directive()
export abstract class Layout {
    type = input.required<LayoutType>()
}