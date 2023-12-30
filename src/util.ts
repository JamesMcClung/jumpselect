export function getOffsetOfTarget(text: string, startOffset: number, dir: -1 | 1, target: string): number | undefined {
    if (target.length !== 1) {
        throw Error(`internal jumpselect error: invalid target "${target}"`);
    }
    startOffset += dir + Math.min(dir, 0); // skip adjacent characters in the search (which are at indices `offset` and `offset-1`)
    for (let i = startOffset; i >= 0 && i < text.length; i += dir) {
        if (text[i] === target) {
            return i;
        }
    }
    return undefined;
}