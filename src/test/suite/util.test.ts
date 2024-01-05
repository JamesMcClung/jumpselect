import * as assert from 'assert';

import * as util from '../../util';

suite('Util Test Suite', () => {
    test('getOffsetOfTarget.charNotFound', () => {
        assert.strictEqual(undefined, util.getCursorOffsetOfTarget("01234", 2, 1, "0"));
        assert.strictEqual(undefined, util.getCursorOffsetOfTarget("01234", 2, 1, "5"));
        assert.strictEqual(undefined, util.getCursorOffsetOfTarget("01234", 2, -1, "4"));
        assert.strictEqual(undefined, util.getCursorOffsetOfTarget("01234", 2, -1, "5"));
    });

    test('getOffsetOfTarget.findCharRight', () => {
        assert.strictEqual(3, util.getCursorOffsetOfTarget("01234", 2, 1, "3"));
        assert.strictEqual(4, util.getCursorOffsetOfTarget("01234", 2, 1, "4"));
    });

    test('getOffsetOfTarget.findCharLeft', () => {
        assert.strictEqual(1, util.getCursorOffsetOfTarget("01234", 3, -1, "0"));
        assert.strictEqual(2, util.getCursorOffsetOfTarget("01234", 3, -1, "1"));
    });

    test('getOffsetOfTarget.dontSkipCharLeft', () => {
        assert.strictEqual(4, util.getCursorOffsetOfTarget("a12a4", 4, -1, "a"));
    });

    test('getOffsetOfTarget.dontSkipCharRight', () => {
        assert.strictEqual(0, util.getCursorOffsetOfTarget("a12a4", 0, 1, "a"));
    });

    test('getOffsetOfTarget.dontMatchWrongWay', () => {
        assert.strictEqual(1, util.getCursorOffsetOfTarget("a12a4", 3, -1, "a"));
    });
});
