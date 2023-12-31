# Change Log

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