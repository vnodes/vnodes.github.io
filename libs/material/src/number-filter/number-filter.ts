import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { NumberInputType } from '@vnodes/material/input';
import { clipboardText, dispatchEmptyInputEvent, isDigitString, isIntegerString, isKeyboardCommandEvent, isNumberString } from '@vnodes/material/utils';



@Directive({
    selector: '[vnNumberFilter]',
    standalone: true
})
export class NumberFilterDirective {
    vnDecimals = input<number>(6);
    vnNumberType = input.required<NumberInputType>()

    readonly elementRef = inject(ElementRef<HTMLInputElement>);

    protected isInteger() {
        return this.vnNumberType() === 'integer'
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const currentKey = event.key;

        const element = this.elementRef.nativeElement
        const previousValue = element.value
        const hasMinus = !!previousValue?.includes('-');
        const hasDot = !!previousValue?.includes('.')
        const selectionStart = (event.target as HTMLInputElement).selectionStart
        const [intPart, decimalPart] = (previousValue ?? '').toString().split('.');
        const intLen = intPart?.length ?? 0;
        const decimalLen = decimalPart?.length ?? 0;



        if (isKeyboardCommandEvent(event)) {
            return;
        } else if (!isDigitString(currentKey) && !(currentKey === '.' || currentKey === '-')) {
            this.preventDefault(event)
        }


        if (previousValue) {
            if (intLen >= Number.MAX_SAFE_INTEGER.toString().length) {
                this.preventDefault(event);
                return;
            }

            if (decimalLen >= this.vnDecimals()) {
                if (selectionStart && selectionStart > intLen) {
                    this.preventDefault(event)
                }
            }
        }



        if (currentKey === '.') {
            // And the input is INTEGER
            if (this.isInteger() || hasDot) {
                // Then prevent event 
                this.preventDefault(event)
            }

            // If the key is minus
        } else if (currentKey === '-') {
            // If the current input is "0"
            if (previousValue === '0') {
                this.preventDefault(event)
                // If the current input is negative 
            } else if (hasMinus) {
                // Then toggle the sign
                this.preventDefault(event)
                element.value = previousValue.slice(1);
                dispatchEmptyInputEvent(element)
            } else {
                // Else add the sign
                event.preventDefault()
                element.value = `-${previousValue}`
                dispatchEmptyInputEvent(element)

            }
        } else if (currentKey === '0') {
            if (previousValue === '0' || selectionStart === 0) {
                event.preventDefault()
            }


        } else if (previousValue === '0') {
            this.preventDefault(event)
            element.value = `${currentKey}`
            dispatchEmptyInputEvent(element)
        }




    }

    preventDefault(event: Event) {
        event.preventDefault()
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {

        const pastedText = clipboardText(event);
        if (!pastedText) return;


        const isValidNumberString = this.isInteger() ?
            isIntegerString :
            isNumberString

        if (!isValidNumberString(pastedText)) {
            this.preventDefault(event)
        }
    }




}