/**
 * Dispatch an empty event to triger change event
 * @param element 
 */
export function dispatchEmptyInputEvent(element: HTMLInputElement) {
    element.dispatchEvent(new Event('input', {
        bubbles: true,
        cancelable: true
    }));
}
