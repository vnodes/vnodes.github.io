import { Injectable, InjectionToken, Provider } from "@angular/core";
import { AbstractControl, Validators } from "@angular/forms";

export type ConstraintValue = string | number | boolean;

export type Constraints = Partial<{
    required: boolean,
    min: number,
    max: number,
    maxitems: number;
    minitems: number;
    maxlength: number,
    minlength: number,
    email: boolean,
    password: boolean,
    uuid: boolean,
    unique: boolean;
    hasUppercase: number;
    hasLowercase: number;
    hasNumber: number;
    hasSpecialchar: number;
    noSpace: boolean;
}>

export type ValidatorFn = (control: AbstractControl) => null | Constraints;

export const DEFAULT_ERROR_MESSAGE = new InjectionToken<string>('DEFAULT_ERROR_MESSAGE');
export type InputValidatorMessageResolver = (value: any, constraint: string, constraintValue: ConstraintValue) => string;

export function isDefined<T>(value: T | undefined | null): value is T {
    return value !== null && value !== undefined;
}



@Injectable()
export class InputValidator {
    protected readonly messages = new Map<string, InputValidatorMessageResolver>()

    static required(): ValidatorFn {
        return (control) => {
            if (Validators.required(control)) {
                return { required: true }
            }
            return null;
        }
    }

    static email(): ValidatorFn {
        return (control) => {
            if (Validators.email(control)) {
                return { email: true }
            }
            return null;
        }
    }


    static minlength(length: number): ValidatorFn {
        return (control) => {
            if (Validators.minLength(length)(control)) {
                return {
                    minlength: length
                }
            }
            return null;
        }
    }
    static maxlength(length: number): ValidatorFn {
        return (control) => {
            if (Validators.minLength(length)(control)) {
                return {
                    maxlength: length
                }
            }
            return null;
        }
    }
    static min(length: number): ValidatorFn {
        return (control) => {
            if (Validators.min(length)(control)) {
                return {
                    min: length
                }
            }
            return null;
        }
    }
    static max(length: number): ValidatorFn {
        return (control) => {
            if (Validators.max(length)(control)) {
                return {
                    max: length
                }
            }
            return null;
        }
    }
    static maxitems(length: number): ValidatorFn {
        return (control) => {
            if (Validators.max(length)(control)) {
                return {
                    maxitems: length
                }
            }
            return null;
        }
    }
    static minitems(length: number): ValidatorFn {
        return (control) => {
            if (Validators.max(length)(control)) {
                return {
                    minitems: length
                }
            }
            return null;
        }
    }

    static hasUppercase(count = 1): ValidatorFn {
        return ({ value }) => {
            if (!/[A-Z]{1,}/.test(value)) {
                return { hasUppercase: count }
            }
            return null;
        }
    }
    static hasLowercase(count = 1): ValidatorFn {
        return ({ value }) => {
            if (!/[a-z]{1,}/.test(value)) {
                return { hasLowercase: count }
            }
            return null;
        }
    }
    static hasNumber(count = 1): ValidatorFn {
        return ({ value }) => {
            if (!/[0-9]{1,}/.test(value)) {
                return { hasNumber: count }
            }
            return null;
        }
    }
    static hasSpecialchar(count = 1): ValidatorFn {
        return ({ value }) => {
            if (!/[\W]{1,}/.test(value)) {
                return { hasSpecialchar: count }
            }
            return null;
        }
    }
    static noSpace(): ValidatorFn {
        return ({ value }) => {
            if (/[\s]{1,}/.test(value)) {
                return { noSpace: true }
            }
            return null;
        }
    }

    static password(): ValidatorFn {
        return (control) => {
            const result =
                this.noSpace()(control) ||
                this.minlength(8)(control) ||
                this.hasUppercase()(control) ||
                this.hasLowercase()(control) ||
                this.hasSpecialchar()(control) ||
                this.hasNumber()(control)

            return result;

        }
    }

    static provideDefault(): Provider {

        const instance = new InputValidator();
        instance.initDefaultMessages();
        return {

            provide: InputValidator,
            useValue: instance
        }
    }


    errorMessage(value: any, constraint: string, constraintValue: any) {
        return this.messages.get(constraint)?.(value, constraint, constraintValue)
    }

    /**
     * Initialize default messsages
     */
    initDefaultMessages() {
        this.messages.set('required', () => `Required`)
        this.messages.set('minlength', (...args) => `Shorter than ${args[2]}`)
        this.messages.set('maxlength', (...args) => `Longer than ${args[2]}`)
        this.messages.set('maxitems', (...args) => `More than ${args[2]} items`)
        this.messages.set('minitems', (...args) => `Less than ${args[2]} items`)

        this.messages.set('min', (...args) => `Less than ${args[2]}`)
        this.messages.set('max', (...args) => `More than ${args[2]}`)
        this.messages.set('hasUppercase', (...args) => `At least ${args[2]} uppercase letters`)
        this.messages.set('hasLowercase', (...args) => `At least ${args[2]} lowercase letters`)
        this.messages.set('hasNumber', (...args) => `At least ${args[2]} number`)
        this.messages.set('noSpace', (...args) => `Space is not allowed`)
        this.messages.set('hasSpecialchar', (...args) => `At least ${args[2]} special chracters`)
        this.messages.set('email', () => `Invalid email`)
    }


}