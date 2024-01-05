import * as assert from 'assert';

import * as util from '../../util';

suite('Util Test Suite', () => {
    test('getOffsetOfTarget.charNotFound', () => {
        assert.strictEqual(undefined, util.getOffsetOfTarget("01234", 2, 1, "0"));
        assert.strictEqual(undefined, util.getOffsetOfTarget("01234", 2, 1, "5"));
        assert.strictEqual(undefined, util.getOffsetOfTarget("01234", 2, -1, "4"));
        assert.strictEqual(undefined, util.getOffsetOfTarget("01234", 2, -1, "5"));
    });

    test('getOffsetOfTarget.findCharRight', () => {
        assert.strictEqual(3, util.getOffsetOfTarget("01234", 2, 1, "3"));
        assert.strictEqual(4, util.getOffsetOfTarget("01234", 2, 1, "4"));
    });

    test('getOffsetOfTarget.findCharLeft', () => {
        assert.strictEqual(3, util.getOffsetOfTarget("01234", 2, 1, "3"));
        assert.strictEqual(4, util.getOffsetOfTarget("01234", 2, 1, "4"));
    });

    test('getOffsetOfTarget.dontSkipCharLeft', () => {
        assert.strictEqual(3, util.getOffsetOfTarget("a12a4", 4, -1, "a"));
    });

    test('getOffsetOfTarget.dontSkipCharRight', () => {
        assert.strictEqual(0, util.getOffsetOfTarget("a12a4", 0, 1, "a"));
    });

    test('getOffsetOfTarget.dontMatchWrongWay', () => {
        assert.strictEqual(0, util.getOffsetOfTarget("a12a4", 3, -1, "a"));
    });
});
