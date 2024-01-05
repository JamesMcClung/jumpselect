import * as vscode from 'vscode';
import * as util from './util';

let lastTarget: string | undefined = undefined;
let lastReadKey: vscode.Disposable | undefined = undefined;

function jumpToTarget(doc: vscode.TextDocument, sel: vscode.Selection, dir: -1 | 1, select: boolean, target: string): vscode.Selection {
    const startCursorOffset = doc.offsetAt(sel.active);
    const text = doc.getText();
    const endCursorOffset = util.getCursorOffsetOfTarget(text, startCursorOffset, dir, target);

    if (endCursorOffset === undefined) {
        return sel;
    }

    const endPos = doc.positionAt(endCursorOffset);

    if (!select) {
        return new vscode.Selection(endPos, endPos);
    } else {
        return new vscode.Selection(sel.anchor, endPos);
    }
}

export async function jump(dir: -1 | 1, select: boolean, showInputBox: boolean = false) {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        return;
    }

    if (showInputBox) {
        const target = await vscode.window.showInputBox();
        doJumps(editor, dir, select, target);
    } else {
        if (lastReadKey !== undefined) {
            lastReadKey.dispose();
        }
        // VSCode's problematic hack: https://github.com/Microsoft/vscode/issues/13441
        const readKey = vscode.commands.registerCommand('type', async (arg: { text: string }) => {
            let target: string | undefined = arg.text;
            if (matchesWordModeTrigger(target)) {
                target = await vscode.window.showInputBox();
            }

            doJumps(editor, dir, select, target);

            lastReadKey = undefined;
            readKey.dispose();
        });
        lastReadKey = readKey;
    }
}

function doJumps(editor: vscode.TextEditor, dir: -1 | 1, select: boolean, target: string | undefined) {
    if (target !== undefined && target.length > 0) {
        lastTarget = target;
        editor.selections = editor.selections.map(sel => jumpToTarget(editor.document, sel, dir, select, target));
        editor.revealRange(editor.selection);
    }
}

function matchesWordModeTrigger(target: string): boolean {
    const wordModeTrigger = vscode.workspace.getConfiguration().get<string>("jumpselect.wordModeTrigger");
    return wordModeTrigger === target ||
        wordModeTrigger === "\\n" && target === "\n";
}

export async function copyJump(dir: -1 | 1, select: boolean) {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        return;
    }

    doJumps(editor, dir, select, lastTarget);
}
