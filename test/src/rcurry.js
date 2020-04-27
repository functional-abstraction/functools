
var util = require("util");

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};

var g = functools.rcurry( f, f.length );

var one = function (x, y, z) {
	var msg, h;

	msg = util.format("g( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g( %s, %s )( %s ) === f( %s, %s, %s )", y, z, x, x, y, z);
	deepEqual(g( y, z )( x ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s )( %s ) === f( %s, %s, %s )", z, y, x, x, y, z);
	deepEqual(g( z )( y )( x ), f( x, y, z ), msg);

	msg = util.format("g( %s )( %s, %s ) === f( %s, %s, %s )", z, x, y, x, y, z);
	deepEqual(g( z )( x, y ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(g()()()( x, y, z ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s, %s )()( %s ) === f( %s, %s, %s )", y, z, x, x, y, z);
	deepEqual(g()()()( y, z )()( x ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )", z, y, x, x, y, z);
	deepEqual(g()()()( z )()( y )()( x ), f( x, y, z ), msg);

	msg = util.format("g()()()( %s )()( %s, %s ) === f( %s, %s, %s )", z, x, y, x, y, z);
	deepEqual(g()()()( z )()( x, y ), f( x, y, z ), msg);

	h = g();

	msg = util.format("h( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(h( x, y, z ), f( x, y, z ), msg);

	msg = util.format("h( %s, %s )( %s ) === f( %s, %s, %s )", y, z, x, x, y, z);
	deepEqual(h( y, z )( x ), f( x, y, z ), msg);

	msg = util.format("h( %s )( %s )( %s ) === f( %s, %s, %s )", z, y, x, x, y, z);
	deepEqual(h( z )( y )( x ), f( x, y, z ), msg);

	msg = util.format("h( %s )( %s, %s ) === f( %s, %s, %s )", z, x, y, x, y, z);
	deepEqual(h( z )( x, y ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s, %s, %s ) === f( %s, %s, %s )", x, y, z, x, y, z);
	deepEqual(h()()()( x, y, z ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s, %s )()( %s ) === f( %s, %s, %s )", y, z, x, x, y, z);
	deepEqual(h()()()( y, z )()( x ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s )()( %s )()( %s ) === f( %s, %s, %s )", z, y, x, x, y, z);
	deepEqual(h()()()( z )()( y )()( x ), f( x, y, z ), msg);

	msg = util.format("h()()()( %s )()( %s, %s ) === f( %s, %s, %s )", z, x, y, x, y, z);
	deepEqual(h()()()( z )()( x, y ), f( x, y, z ), msg);
};

test( "rcurry", function () {

	one(0, 0, 0);
	one(1, 0, 0);
	one(0, 1, 0);
	one(0, 0, 1);
	one(0, 3, 40);
	one(13, 41, 97);

});
