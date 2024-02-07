import test from 'ava';
import * as functools from '#module';

test('noop', (t) => {
	const a = [1, 2, 3];

	const A = [1, 2, 3];

	const b = {
		a: 0,
		b: 1,
		c: 2,
	};

	const B = {
		a: 0,
		b: 1,
		c: 2,
	};

	t.is(functools.noop(), undefined, '1st call');

	t.deepEqual(a, A, '1st a unchanged');
	t.deepEqual(b, B, '1st b unchanged');

	t.is(functools.noop(a, b), undefined, '2nd call');

	t.deepEqual(a, A, '2nd a unchanged');
	t.deepEqual(b, B, '2nd b unchanged');

	t.is(functools.noop(b, a), undefined, '3rd call');

	t.deepEqual(a, A, '3rd a unchanged');
	t.deepEqual(b, B, '3rd b unchanged');
});
