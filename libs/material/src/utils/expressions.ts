

/**
 * Expression to check the character is a digit
 */
export const DigitExp = /^[0-9]{1}$/;

/**
 * Expression to check the number is decimal number
 */
export const NumberExp = /^(?!0+$)(?!0\.0+$)\d+(\.\d+)?$/

/**
 * Expression to check the number is an integer
 */
export const IntegerExp = /^[0-9]{1,}$/


/**
 * Expression {@link DigitExp}
 * @param value number string
 * @returns 
 */
export function isDigitString(value: string) {
    return DigitExp.test(value)
}

/**
 * Expression {@link NumberExp}
 * @param value number string
 * @returns 
 */
export function isNumberString(value: string) {
    return NumberExp.test(value)
}



/**
 * Expression {@link IntegerExp}
 * @param value number string
 * @returns 
 */
export function isIntegerString(value: string) {
    return IntegerExp.test(value)
}

/**
 * Get the decimal part of {@link value}
 * @param value number string
 * @returns 
 */
export function decimalPart(value: string) {
    return value.split(".")[1];
}

/**
 * Check the number has ({@link maximumNumberOfDecimals}) of decimals or not.
 * @param value number string
 * @param maximumNumberOfDecimals 
 * @returns 
 */
export function hasNumberOfDecimalsOrMore(value: string, maximumNumberOfDecimals: number): boolean {
    const decimalCount = decimalPart(value)?.length ?? 0;
    return decimalCount >= maximumNumberOfDecimals
}