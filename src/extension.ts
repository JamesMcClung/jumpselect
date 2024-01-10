import * as vscode from 'vscode';
import * as jumpselect from './jumpselect';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.jumpLeft', () => jumpselect.jump(-1, false, showInputBox())));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.jumpRight', () => jumpselect.jump(1, false, showInputBox())));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.jumpSelectLeft', () => jumpselect.jump(-1, true, showInputBox())));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.jumpSelectRight', () => jumpselect.jump(1, true, showInputBox())));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.copyJumpLeft', () => jumpselect.copyJump(-1, false)));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.copyJumpRight', () => jumpselect.copyJump(1, false)));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.copyJumpSelectLeft', () => jumpselect.copyJump(-1, true)));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.copyJumpSelectRight', () => jumpselect.copyJump(1, true)));
	context.subscriptions.push(vscode.commands.registerCommand('jumpselect.setTargetToSelection', jumpselect.setTargetToSelection));
}

function showInputBox(): boolean | undefined {
	return vscode.workspace.getConfiguration().get<boolean>("jumpselect.showInputBox");
}

export function deactivate() { }
