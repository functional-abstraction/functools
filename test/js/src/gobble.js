
var util = require("util");

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};


var one = function (trash, x, y, z) {
	var msg, len, args;
	len = trash.length;
	args = trash.concat([x, y, z]);
	var g = functools.gobble( f, len );

	msg = util.format("g.apply( null, %s ) === f( %s, %s, %s )", JSON.stringify(args), x, y, z)
	deepEqual(g.apply( null, args ), f( x, y, z ), msg);
};

test( "gobble", function () {

	one( [], 0, 0, 0 );
	one( [], 1, 0, 0 );
	one( [], 0, 1, 0 );
	one( [], 0, 0, 1 );
	one( [], 0, 3, 40 );
	one( [], 13, 41, 97 );


	one( [-1], 0, 0, 0 );
	one( [-1], 1, 0, 0 );
	one( [-1], 0, 1, 0 );
	one( [-1], 0, 0, 1 );
	one( [-1], 0, 3, 40 );
	one( [-1], 13, 41, 97 );


	one( [-1, -2], 0, 0, 0 );
	one( [-1, -2], 1, 0, 0 );
	one( [-1, -2], 0, 1, 0 );
	one( [-1, -2], 0, 0, 1 );
	one( [-1, -2], 0, 3, 40 );
	one( [-1, -2], 13, 41, 97 );


});
