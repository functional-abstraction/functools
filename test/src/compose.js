import util from 'node:util';
import test from 'ava';
import * as functools from '../../src/index.js';

const f = function (x) {
	return x * x;
};

const g = function (x) {
	return x + 1;
};

const fg = functools.compose([f, g]);

const one = function (t, x) {
	t.deepEqual(fg(x), f(g(x)), util.format('fg( %s ) === f( g( %s ) )', x, x));
};

test('compose', (t) => {
	one(t, 0);
	one(t, 1);
	one(t, 2);
});
