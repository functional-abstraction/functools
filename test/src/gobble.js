import test from 'ava';
import * as functools from '../../src/index.js';

const f = (x, y, z) => 2 * x + y - z;

const macro = (t, trash, x, y, z) => {
	const len = trash.length;
	const args = trash.concat([x, y, z]);
	const g = functools.gobble(f, len);

	t.deepEqual(g(...args), f(x, y, z));
};

macro.title = (title, trash, x, y, z) =>
	title ??
	`gobble(${f.name}, ${trash.length})(...${JSON.stringify(
		trash.concat([x, y, z]),
	)}) === f(${x}, ${y}, ${z})`;

test(macro, [], 0, 0, 0);
test(macro, [], 1, 0, 0);
test(macro, [], 0, 1, 0);
test(macro, [], 0, 0, 1);
test(macro, [], 0, 3, 40);
test(macro, [], 13, 41, 97);

test(macro, [-1], 0, 0, 0);
test(macro, [-1], 1, 0, 0);
test(macro, [-1], 0, 1, 0);
test(macro, [-1], 0, 0, 1);
test(macro, [-1], 0, 3, 40);
test(macro, [-1], 13, 41, 97);

test(macro, [-1, -2], 0, 0, 0);
test(macro, [-1, -2], 1, 0, 0);
test(macro, [-1, -2], 0, 1, 0);
test(macro, [-1, -2], 0, 0, 1);
test(macro, [-1, -2], 0, 3, 40);
test(macro, [-1, -2], 13, 41, 97);
