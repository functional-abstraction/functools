import util from 'node:util';
import test from 'ava';
import * as functools from '../../src/index.js';

const f = function (x, y) {
	return [x * x * y, x * y * y];
};

const g = function (x, y) {
	return [x + 1, 2 * y - x];
};

const fg = functools.starcompose([f, g]);

const one = function (t, x, y) {
	t.deepEqual(
		fg([x, y]),
		functools.star(f, functools.star(g, [x, y])),
		util.format('fg( %s , %s ) === f( g( %s , %s ) )', x, y, x, y),
	);
};

test('starcompose', (t) => {
	one(t, 0, 178);
	one(t, 1, 237);
	one(t, 2, -89);
});
