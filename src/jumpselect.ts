import * as vscode from 'vscode';
import * as util from './util';

let lastTarget: string | undefined = undefined;

function jumpToTarget(doc: vscode.TextDocument, sel: vscode.Selection, dir: -1 | 1, select: boolean, target: string): vscode.Selection {
    const startOffset = doc.offsetAt(sel.active);
    const text = doc.getText();
    const endOffset = util.getOffsetOfTarget(text, startOffset, dir, target);

    if (endOffset === undefined) {
        return sel;
    }

    const endPos = doc.positionAt(endOffset - Math.min(0, dir)); // don't let cursor go past target

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

    const doc = editor.document;

    if (showInputBox) {
        const target = await vscode.window.showInputBox();
        if (target !== undefined) {
            editor.selections = editor.selections.map(sel => jumpToTarget(doc, sel, dir, select, target));
        }
    } else {
        // VSCode's problematic hack: https://github.com/Microsoft/vscode/issues/13441
        let readKey = vscode.commands.registerCommand('type', (arg: { text: string }) => {
            const target = arg.text;
            editor.selections = editor.selections.map(sel => jumpToTarget(doc, sel, dir, select, target));
            readKey.dispose();
        });
    }
}

export async function copyJump(dir: -1 | 1, select: boolean) {
    const editor = vscode.window.activeTextEditor;

    if (!editor || lastTarget === undefined) {
        return;
    }

    editor.selections = editor.selections.map(sel => jumpToTarget(editor.document, sel, dir, select, lastTarget!));
}
