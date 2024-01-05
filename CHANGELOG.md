# Change Log

## v3.3.0

- Attempting to jump past the last match will jump to immediately after the match

## v3.2.1

- Added a description to the extension

## v3.2.0

- Fix https://github.com/JamesMcClung/jumpselect/issues/5

## v3.1.1

- Added minor version release notes to readme

## v3.1.0

- Fix https://github.com/JamesMcClung/jumpselect/issues/3

## v3.0.1

- Changed "-" to "+" in keybinding descriptions in readme

## v3.0.0: Word Mode

- Support for jumping to strings of arbitrary length
- New setting: `jumpselect.wordModeTrigger`
    - Opens an input box to input an arbitrary string

## v2.1.0

- Fix https://github.com/JamesMcClung/jumpselect/issues/1

## v2.0.0: Copy Commands

- New commands: `jumpselect.copyJumpLeft`, `jumpselect.copyJumpRight`, `jumpselect.copyJumpSelectLeft`, `jumpselect.copyJumpSelectRight`
    - Default key bindings: `alt+,`, `alt+.`, `shift+alt+,`, `shift+alt+.`
    - Same behavior as non-copy variants but use the most recent jumped-to character instead of waiting for input

## v1.0.0: Initial Release

- New commands: `jumpselect.jumpLeft`, `jumpselect.jumpRight`
    - Default key bindings: `cmd+,`, `cmd+.`
    - Waits for key press and jumps to specified character
- New commands: `jumpselect.jumpSelectLeft`, `jumpselect.jumpSelectRight`
    - Default key bindings: `cmd+,`, `cmd+.`
    - Waits for key press and jumps to specified character
- New setting: `jumpselect.showInputBox`
    - Changes behavior of jump commands to use an input box instead of waiting for key press