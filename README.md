# jumpselect

A VS Code extension for jumping to specified characters.

## Added Commands

### `jumpselect.jumpLeft` and `jumpselect.jumpRight`
_default keybindings: `cmd-,`, `cmd-.`_

These commands wait for a key press and jump to the specified character.

### `jumpselect.jumpSelectLeft` and `jumpselect.jumpSelectRight`
_default keybindings: `shift-cmd-,`, `shift-cmd-.`_

These commands wait for a key press and select text up to the specified character. 

### `jumpselect.copyJumpLeft`, `jumpselect.copyJumpRight`, `jumpselect.copyJumpSelectLeft`, and `jumpselect.copyJumpSelectRight`
_default keybindings: `alt-,`, `alt-.`, `shift-alt-,`, `shift-alt-.`_

These commands function as their non-copy variants, except they jump to the most recently specified character instead of querying a new one.

## Added Settings

### `jumpselect.showInputBox`

This setting changes the behavior of the commands to use the input box instead of waiting for a key press. This avoids conflicts with other extensions that also wait for key presses, but is slightly slower since it requires "enter" to confirm the key.

## Requirements

This extension has no requirements.

## Known Issues

See https://github.com/JamesMcClung/jumpselect/issues

## Release Notes

### 2.0.0

Added "copy" versions of existing jump commands: `jumpselect.copyJumpLeft`, `jumpselect.copyJumpRight`, `jumpselect.copyJumpSelectLeft`, and `jumpselect.copyJumpSelectRight`

### 1.0.0

Added `jumpselect.jumpLeft`, `jumpselect.jumpRight`, `jumpselect.jumpSelectLeft`, `jumpselect.jumpSelectRight` commands and `jumpselect.showInputBox` setting
