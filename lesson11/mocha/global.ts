declare global {
    var maxCharge: number | undefined;
    var minCharge: number | undefined;
}

export function initGlobal(): void {
    globalThis.maxCharge = 80;
    globalThis.minCharge = 10;
}

