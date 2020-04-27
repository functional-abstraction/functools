
var util = require("util");

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};


var one = function (x, y, z) {
	var msg;
	var g = functools.partial( f, [x] );
	var h = functools.partial( f, [x, y] );
	var i = functools.partial( f, [x, y, z] );

	msg = util.format("g( %s, %s ) === f( %s, %s, %s )", y, z, x, y, z)
	deepEqual(g( y, z ), f( x, y, z ), msg);

	msg = util.format("h( %s ) === f( %s, %s, %s )", z, x, y, z)
	deepEqual(h( z ), f( x, y, z ), msg);

	msg = util.format("i() === f( %s, %s, %s )", x, y, z)
	deepEqual(i(), f( x, y, z ), msg);
};

test( "partial", function () {

	one(0, 0, 0);
	one(1, 0, 0);
	one(0, 1, 0);
	one(0, 0, 1);
	one(0, 3, 40);
	one(13, 41, 97);

});
