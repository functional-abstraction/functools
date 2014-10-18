
var f, one;

f = function ( x, y, z ) {
	return x + 2*y + 3*z;
};


one = function ( x, y, z ) {

	deepEqual( functools.star( f, [x, y, z] ), f( x, y, z ), [x, y, z] );

};

test( "star", function () {

	var i, n;

	n = 1000;
	i = n;

	while ( i-- ) {
		one( Math.random(), Math.random(), Math.random() );
	}

});
