export function getCursorOffsetOfTarget(text: string, startCursorOffset: number, dir: -1 | 1, target: string): number | undefined {
    if (target.length === 0) {
        throw Error(`internal jumpselect error: empty target`);
    }
    startCursorOffset += Math.min(dir, 0); // if going left, only search to left of cursor
    const matches = target.length === 1 ? matchesChar : (dir === 1 ? matchesAtStart : matchesAtEnd);
    for (let i = startCursorOffset; i >= 0 && i < text.length; i += dir) {
        if (matches(text, target, i)) {
            return i - Math.min(0, dir); // if going left, put cursor to the right of the target
        }
    }
    return undefined;
}

function matchesChar(text: string, target: string, offset: number): boolean {
    return text[offset] === target;
}

function matchesAtEnd(text: string, target: string, offset: number): boolean {
    return text.slice(offset - target.length + 1, offset + 1) === target;
}

function matchesAtStart(text: string, target: string, offset: number): boolean {
    return text.slice(offset, offset + target.length) === target;
}