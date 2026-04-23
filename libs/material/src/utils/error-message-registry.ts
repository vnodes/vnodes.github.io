import { inject, Injectable, InjectionToken, Provider } from "@angular/core";


export const DEFAULT_ERROR_MESSAGE = new InjectionToken<string>('DEFAULT_ERROR_MESSAGE');
export type ErrorMessageResolver = (value: any, constraint: string, constraints: ErrorConstraints) => string;
export type ErrorConstraints = { [constraint: string]: any };

@Injectable()
export class ErrorMessageRegistry {
    readonly errors = new Map<string, ErrorMessageResolver>();
    protected readonly defaultErrorMessage = inject(DEFAULT_ERROR_MESSAGE, { optional: true, }) ?? "Invalid Field";

    register(constraint: string, errorMessageResolver: ErrorMessageResolver) {
        this.errors.set(constraint, errorMessageResolver)
    }

    resolve(value: any, constraint: string, constraints: ErrorConstraints,) {
        return this.errors.get(constraint)?.(value, constraint, constraints) ?? this.defaultErrorMessage;
    }
}



export function provideErrorMessageRegistry(registry = ErrorMessageRegistry): Provider {
    return {
        provide: ErrorMessageRegistry,
        useClass: ErrorMessageRegistry
    }
}

export function provideDefaultErrorMessage(message = "Invalid Field"): Provider {
    return {
        provide: DEFAULT_ERROR_MESSAGE,
        useValue: message
    }

}