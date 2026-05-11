
export const KEYBOARD_NAVIGATION_EVENTS: Readonly<string[]> = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Shift'
];


/**
 * Check the {@link event} is one of the {@link KEYBOARD_NAVIGATION_EVENTS}
 * @param event 
 * @returns 
 */
export function isKeyboardNavigationEvent(event: KeyboardEvent) {
    return KEYBOARD_NAVIGATION_EVENTS.indexOf(event.key) > -1;
}

/**
 * Check the {@link event} is CTRL+A (Select all) event
 * @param event 
 * @returns 
 */
export function isKeyboardSelectAllEvent(event: KeyboardEvent) {
    return (event.key === 'a' && (event.ctrlKey || event.metaKey))
}


/**
 * Check the {@link event} is CTRL+C (copy) event
 * @param event 
 * @returns 
 */
export function isKeyboardCopyEvent(event: KeyboardEvent) {
    return (event.key === 'c' && (event.ctrlKey || event.metaKey))
}


/**
 * Check the {@link event} is CTRL+V (paste) event
 * @param event 
 * @returns 
 */
export function isKeyboardPasteEvent(event: KeyboardEvent) {
    return (event.key === 'v' && (event.ctrlKey || event.metaKey))
}


/**
 * Check the {@link event} is CTRL+X (cut) event
 * @param event 
 * @returns 
 */
export function isKeyboardCutEvent(event: KeyboardEvent) {
    return (event.key === 'x' && (event.ctrlKey || event.metaKey));
}

/**
 * Check the {@link event} is one of the events {@link isKeyboardCopyEvent},{@link isKeyboardCutEvent}, {@link isKeyboardNavigationEvent}, {@link isKeyboardPasteEvent}, {@link isKeyboardSelectAllEvent}
 * @param event 
 * @returns 
 */
export function isKeyboardCommandEvent(event: KeyboardEvent) {
    return isKeyboardNavigationEvent(event)
        || isKeyboardSelectAllEvent(event)
        || isKeyboardCopyEvent(event)
        || isKeyboardPasteEvent(event)
        || isKeyboardCutEvent(event)

}


