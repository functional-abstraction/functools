
var one, F, f, g, util;

util = require("util");

F = function ( x, y, z ) {
	this.x = x;
	this.y = y;
	this.z = z;
};

F.prototype.mul = function () {
	return this.x * this.y * this.z;
};

f = functools.partial( functools.create, [F] );

g = functools.curry( f, 3 );

one = function ( x, y, z ) {

	var multiplier1, multiplier2;

	multiplier1 = new F( x, y, z );
	multiplier2 = g( x, y, z );

	deepEqual( multiplier2.mul(), multiplier1.mul(), [x, y, z] );

};

test( "curry", function () {

	one( 0, 0, 0 );
	one( 1, 0, 20 );
	one( 9, 1, 2 );
	one( 1, -3990, 11 );
	one( 44, 3, 40 );
	one( -13, 41, -97 );

});
