
test ( "noop", function () {

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

	deepEqual( functools.noop(), undefined, "1st call" );

	deepEqual( a, A, "1st a unchanged");
	deepEqual( b, B, "1st b unchanged");

	deepEqual( functools.noop( a, b ), undefined, "2nd call" );

	deepEqual( a, A, "2nd a unchanged");
	deepEqual( b, B, "2nd b unchanged");

	deepEqual( functools.noop( b, a ), undefined, "3rd call" );

	deepEqual( a, A, "3rd a unchanged");
	deepEqual( b, B, "3rd b unchanged");

});
