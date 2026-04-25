import { ValidatorFn } from "@angular/forms";




const hasUppercase: ValidatorFn = (control) => {
    if (control.value) {
        if (!/[A-Z]{1,}/.test(control.value)) {
            return { hasUppercase: true }
        }

    }
    return null;
}

const hasLowercase: ValidatorFn = (control) => {
    if (control.value) {
        if (!/[a-z]{1,}/.test(control.value)) {
            return { hasUppercase: true }
        }
    }
    return null;
}

const hasNumber: ValidatorFn = (control) => {
    if (control.value) {
        if (!/[0-9]{1,}/.test(control.value)) {
            return { hasUppercase: true }
        }
    }
    return null;
}

const hasSpecialchar: ValidatorFn = (control) => {
    if (control.value) {
        if (!/[\W]{1,}/.test(control.value)) {
            return { hasUppercase: true }
        }
    }
    return null;
}


export const CustomValidators = {
    hasLowercase,
    hasUppercase,
    hasSpecialchar,
    hasNumber
}