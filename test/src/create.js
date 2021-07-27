import test from 'ava';
import * as functools from '../../src/index.js';

function F(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

F.prototype.mul = function () {
	return this.x * this.y * this.z;
};

const f = functools.partial(functools.create, [F]);

const g = functools.curry(f, 3);

const macro = (t, x, y, z) => {
	const multiplier1 = new F(x, y, z);
	const multiplier2 = g(x, y, z);

	t.deepEqual(multiplier2.mul(), multiplier1.mul());
};

macro.title = (title, x, y, z) => title ?? JSON.stringify([x, y, z]);

test(macro, 0, 0, 0);
test(macro, 1, 0, 20);
test(macro, 9, 1, 2);
test(macro, 1, -3990, 11);
test(macro, 44, 3, 40);
test(macro, -13, 41, -97);
