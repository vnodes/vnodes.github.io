export function dispatchEmptyInputEvent(element: HTMLInputElement) {
    element.dispatchEvent(new Event('input', {
        bubbles: true,
        cancelable: true
    }));
}