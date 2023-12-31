export function getOffsetOfTarget(text: string, startOffset: number, dir: -1 | 1, target: string): number | undefined {
    if (target.length === 0) {
        throw Error(`internal jumpselect error: empty target`);
    }
    startOffset += dir + Math.min(dir, 0); // skip adjacent characters in the search (which are at indices `offset` and `offset-1`)
    const matches = target.length === 1 ? matchesChar : (dir === 1 ? matchesAtStart : matchesAtEnd);
    for (let i = startOffset; i >= 0 && i < text.length; i += dir) {
        if (matches(text, target, i)) {
            return i;
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