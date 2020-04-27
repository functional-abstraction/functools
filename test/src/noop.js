import test from 'ava';
import * as functools from '../../src';

test( "noop", t => {

	var a, b, A, B;

	a = [1, 2, 3];

	A = [1, 2, 3];

	b = {
		"a" : 0,
		"b" : 1,
		"c" : 2
	};

	B = {
		"a" : 0,
		"b" : 1,
		"c" : 2
	};

	t.deepEqual( functools.noop(), undefined, "1st call" );

	t.deepEqual( a, A, "1st a unchanged");
	t.deepEqual( b, B, "1st b unchanged");

	t.deepEqual( functools.noop( a, b ), undefined, "2nd call" );

	t.deepEqual( a, A, "2nd a unchanged");
	t.deepEqual( b, B, "2nd b unchanged");

	t.deepEqual( functools.noop( b, a ), undefined, "3rd call" );

	t.deepEqual( a, A, "3rd a unchanged");
	t.deepEqual( b, B, "3rd b unchanged");

});
