
/**
 * Get the texed copied to clipboard 
 * @param event 
 * @returns 
 */
export function clipboardText(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text');
    return pastedText
}