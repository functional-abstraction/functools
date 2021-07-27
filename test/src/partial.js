import util from 'node:util';
import test from 'ava';
import * as functools from '../../src/index.js';

const f = function (x, y, z) {
	return 2 * x + y - z;
};

const one = function (t, x, y, z) {
	let msg;
	const g = functools.partial(f, [x]);
	const h = functools.partial(f, [x, y]);
	const i = functools.partial(f, [x, y, z]);

	msg = util.format('g( %s, %s ) === f( %s, %s, %s )', y, z, x, y, z);
	t.deepEqual(g(y, z), f(x, y, z), msg);

	msg = util.format('h( %s ) === f( %s, %s, %s )', z, x, y, z);
	t.deepEqual(h(z), f(x, y, z), msg);

	msg = util.format('i() === f( %s, %s, %s )', x, y, z);
	t.deepEqual(i(), f(x, y, z), msg);
};

test('partial', (t) => {
	one(t, 0, 0, 0);
	one(t, 1, 0, 0);
	one(t, 0, 1, 0);
	one(t, 0, 0, 1);
	one(t, 0, 3, 40);
	one(t, 13, 41, 97);
});
