declare global {
    var maxCharg: number | undefined;
    var minCharg: number | undefined;
}

export function initGlobal(): void {
    globalThis.maxCharg = 80;
    globalThis.minCharg = 10;
}

