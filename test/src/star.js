import test from 'ava';
import * as functools from '../../src';


function f ( x, y, z ) {
	return x + 2*y + 3*z;
};


function one ( x, y, z ) {

	t.deepEqual( functools.star( f, [x, y, z] ), f( x, y, z ), [x, y, z] );

};

test( "star", t => {

	var i, n;

	n = 1000;
	i = n;

	while ( i-- ) {
		one( Math.random(), Math.random(), Math.random() );
	}

});
