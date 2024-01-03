# jumpselect

A VS Code extension for jumping to specified characters.

## Added Commands

### `jumpselect.jumpLeft` and `jumpselect.jumpRight`
_default keybindings: `cmd+,`, `cmd+.`_

These commands wait for a key press and jump to the specified character or word.

Associated settings: `jumpselect.wordModeTrigger` and  `jumpselect.showInputBox`.

### `jumpselect.jumpSelectLeft` and `jumpselect.jumpSelectRight`
_default keybindings: `shift+cmd+,`, `shift+cmd+.`_

These commands function as their non-select variants, except they also select text along the way.

### `jumpselect.copyJumpLeft`, `jumpselect.copyJumpRight`, `jumpselect.copyJumpSelectLeft`, and `jumpselect.copyJumpSelectRight`
_default keybindings: `alt+,`, `alt+.`, `shift+alt+,`, `shift+alt+.`_

These commands function as their non-copy variants, except they jump to the most recently specified string instead of querying a new one.

## Added Settings

### `jumpselect.showInputBox`

This setting changes the behavior of the commands to use the input box instead of waiting for a key press (ie, it starts in "word mode"; see `jumpselect.wordModeTrigger`). This avoids conflicts with other extensions that also wait for key presses, but is slightly slower since it requires "enter" to confirm the key.

### `jumpselect.wordModeTrigger`

This setting determines which character triggers "word mode" for the jump commands. Default is enter. Word mode uses the input box to take an arbitrary string as a jump target.

## Requirements

This extension has no requirements.

## Known Issues

See https://github.com/JamesMcClung/jumpselect/issues

## Release Notes

### 3.2.0

Jumping now updates window scrolling

### 3.1.0

Fixed a typo in a command name

### 3.0.0

Added support for jumping to words and a new setting to make use of it: `jumpselect.wordModeTrigger`

### 2.1.0

Failed jumps no longer permanently block key listens

### 2.0.0

Added "copy" versions of existing jump commands: `jumpselect.copyJumpLeft`, `jumpselect.copyJumpRight`, `jumpselect.copyJumpSelectLeft`, and `jumpselect.copyJumpSelectRight`

### 1.0.0

Added `jumpselect.jumpLeft`, `jumpselect.jumpRight`, `jumpselect.jumpSelectLeft`, `jumpselect.jumpSelectRight` commands and `jumpselect.showInputBox` setting
