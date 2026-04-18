import { Directive, ElementRef, HostListener, input } from '@angular/core';



export const digitExp = /^[0-9]{1}$/;
export const numberExp = /(^0.[0-9]{1,}$) | (^[1-9]{1,}\.?[0-9]+$)/
export const navigationKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight'
];


@Directive({
    selector: '[vnNumberFilter]',
    standalone: true
})
export class NumberFilterDirective {
    type = input<'number' | 'integer'>('number', { alias: "vnNumberType" });

    constructor(protected readonly el: ElementRef<HTMLInputElement>) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {

        const nativeElm = this.el.nativeElement
        const previousValue = nativeElm.value
        const hasMinus = previousValue.includes('-');
        const hasDot = previousValue.includes('.')

        if (
            navigationKeys.indexOf(event.key) > -1 ||
            (event.key === 'a' && (event.ctrlKey || event.metaKey)) ||
            (event.key === 'c' && (event.ctrlKey || event.metaKey)) ||
            (event.key === 'v' && (event.ctrlKey || event.metaKey)) ||
            (event.key === 'x' && (event.ctrlKey || event.metaKey))
        ) {
            return;
        }

        // If is the key is DOT 
        if (event.key === '.') {
            // And the input is INTEGER
            if (this.type() === 'integer') {
                // Then prevent event 
                event.preventDefault();

                // Else (none integer) the previous value already has the DOT
            } else if (hasDot) {

                // Then prevent event
                event.preventDefault()
                return;

            }
            // If the key is minus
        } else if (event.key === '-') {

            // If the previous value has minus already
            if (hasMinus) {
                // Then toggle the sign
                nativeElm.value = nativeElm.value.slice(1);
            } else {
                // Else add the sign
                nativeElm.value = `-${nativeElm.value}`
            }
        } else if (event.key === '0') {
            if (previousValue === '0') {
                event.preventDefault()
            }
        } else if (!digitExp.test(event.key)) {
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text');

        // Prevent paste if the content contains non-numeric characters
        if (pastedText && !numberExp.test(pastedText)) {
            event.preventDefault();
        }
    }
}