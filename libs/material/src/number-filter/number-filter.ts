import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { isCommandEvent } from '../keyboard/keyboard';



export const digitExp = /^[0-9]{1}$/;
export const numberExp = /(^0.[0-9]{1,}$) | (^[1-9]{1,}\.?[0-9]+$)/


@Directive({
    selector: '[vnNumberFilter]',
    standalone: true
})
export class NumberFilterDirective {
    type = input<'number' | 'integer'>('number', { alias: "vnNumberFilter" });
    decimals = input<number>(6);


    constructor(protected readonly el: ElementRef<HTMLInputElement>) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {



        const key = event.key;
        const nativeElm = this.el.nativeElement
        const previousValue = nativeElm.value
        const hasMinus = !!previousValue?.includes('-');
        const hasDot = !!previousValue?.includes('.')
        // const selectionStart = nativeElm.selectionStart ?? previousValue.length - 1
        // const selectionEnd = nativeElm.selectionEnd ?? previousValue.length - 1

        if (isCommandEvent(event)) {
            return;
            // If is the key is DOT 
        } else if (key === '.') {
            // And the input is INTEGER
            if (this.type() === 'integer' || hasDot) {
                // Then prevent event 
                event.preventDefault();

                // Else (none integer) the previous value already has the DOT
            }

            // If the key is minus
        } else if (key === '-') {
            // If the current input is "0"
            if (previousValue === '0') {
                event.preventDefault();
                // If the current input is negative 
            } else if (hasMinus) {
                // Then toggle the sign
                event.preventDefault();
                nativeElm.value = previousValue.slice(1);
                this.dispachInputEvent(nativeElm);
            } else {
                // Else add the sign
                event.preventDefault()
                nativeElm.value = `-${previousValue}`
                this.dispachInputEvent(nativeElm);

            }
        } else if (key === '0') {
            if (previousValue === '0') {
                event.preventDefault()
            }
        } else if (!digitExp.test(key)) {
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


    dispachInputEvent(element: HTMLInputElement) {
        element.dispatchEvent(new Event('input', {
            bubbles: true,
            cancelable: true
        }));
    }

}