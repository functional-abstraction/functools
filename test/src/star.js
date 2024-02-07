import test from 'ava';
import * as functools from '#module';

const f = (x, y, z) => x + 2 * y + 3 * z;

const macro = (t, x, y, z) => {
	t.deepEqual(functools.star(f, [x, y, z]), f(x, y, z));
};

macro.title = (title, x, y, z) => title ?? JSON.stringify([x, y, z]);

const n = 1000;
let i = n;

while (i--) {
	test(macro, Math.random(), Math.random(), Math.random());
}
