
var util = require("util");

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};

var g = functools.curry( f, f.length );

var one = function (x, y, z) {
	var msg;

	msg = util.format("g( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g( x )( y, z ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g( x )( y )( z ), f( x, y, z ), msg);

	msg = util.format("g( %s, %s )( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g( x, y )( z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g()()()( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g()()()( x )()( y, z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g()()()( x )()( y )()( z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s )()( %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g()()()( x, y )()( z ), f( x, y, z ), msg);
};

test( "curry", function () {

	one(0, 0, 0);
	one(1, 0, 0);
	one(0, 1, 0);
	one(0, 0, 1);
	one(0, 3, 40);
	one(13, 41, 97);

});
