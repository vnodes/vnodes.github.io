export const DigitExp = /^[0-9]{1}$/;
export const NumberExp = /^(?!0+$)(?!0\.0+$)\d+(\.\d+)?$/
export const IntegerExp = /^[0-9]{1,}$/


export function isDigitString(digit: string) {
    return DigitExp.test(digit)
}

export function isNumberString(numberString: string) {
    return NumberExp.test(numberString)
}

export function isIntegerString(integerString: string) {
    return IntegerExp.test(integerString)
}

