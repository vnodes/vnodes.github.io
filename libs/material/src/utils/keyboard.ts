
export const navigationKeys: Readonly<string[]> = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight'
];


export function isNavigationEvent(event: KeyboardEvent) {
    return navigationKeys.indexOf(event.key) > -1;
}


export function isSelectAllEvent(event: KeyboardEvent) {
    return (event.key === 'a' && (event.ctrlKey || event.metaKey))
}
export function isCopyEvent(event: KeyboardEvent) {
    return (event.key === 'c' && (event.ctrlKey || event.metaKey))
}

export function isPasteEvent(event: KeyboardEvent) {
    return (event.key === 'v' && (event.ctrlKey || event.metaKey))
}

export function isCutEvent(event: KeyboardEvent) {
    return (event.key === 'x' && (event.ctrlKey || event.metaKey));
}

export function isCommandEvent(event: KeyboardEvent) {

    return isNavigationEvent(event)
        || isSelectAllEvent(event)
        || isCopyEvent(event)
        || isPasteEvent(event)
        || isCutEvent(event)

}


