import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { clipboardText, dispatchEmptyInputEvent, isCommandEvent, isDigitString, isIntegerString, isNumberString } from '@vnodes/material/utils';

@Directive({
    selector: '[vnNumberFilter]',
    standalone: true
})
export class NumberFilterDirective {
    decimals = input<number>(6);
    readonly elementRef = inject(ElementRef<HTMLInputElement>);

    protected isInteger() {
        return this.elementRef.nativeElement.type === 'integer'
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const currentKey = event.key;

        const element = this.elementRef.nativeElement
        const previousValue = element.value
        const hasMinus = !!previousValue?.includes('-');
        const hasDot = !!previousValue?.includes('.')
        // const selectionStart = nativeElm.selectionStart ?? previousValue.length - 1
        // const selectionEnd = nativeElm.selectionEnd ?? previousValue.length - 1



        if (isCommandEvent(event)) {
            return;
            // If is the key is DOT 
        } else if (currentKey === '.') {
            // And the input is INTEGER
            if (this.isInteger() || hasDot) {
                // Then prevent event 
                event.preventDefault();
            }

            // If the key is minus
        } else if (currentKey === '-') {
            // If the current input is "0"
            if (previousValue === '0') {
                event.preventDefault();
                // If the current input is negative 
            } else if (hasMinus) {
                // Then toggle the sign
                event.preventDefault();
                element.value = previousValue.slice(1);
                dispatchEmptyInputEvent(element)
            } else {
                // Else add the sign
                event.preventDefault()
                element.value = `-${previousValue}`
                dispatchEmptyInputEvent(element)

            }
        } else if (currentKey === '0') {
            if (previousValue === '0') {
                event.preventDefault()
            }
        } else if (previousValue === '0') {
            event.preventDefault();
            element.value = `${currentKey}`
            dispatchEmptyInputEvent(element)

        } else if (!isDigitString(currentKey)) {
            event.preventDefault();
        }

    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {

        const pastedText = clipboardText(event);
        if (!pastedText) return;


        const isValidNumberString = this.isInteger() ?
            isIntegerString :
            isNumberString

        if (!isValidNumberString(pastedText)) {
            event.preventDefault();
        }
    }




}