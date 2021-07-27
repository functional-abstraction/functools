import test from 'ava';
import * as functools from '../../src/index.js';


function f ( x, y, z ) {
	return x + 2*y + 3*z;
};


function one ( t , x, y, z ) {

	t.deepEqual( functools.star( f, [x, y, z] ), f( x, y, z ), JSON.stringify([x, y, z]) );

};

test( "star", t => {

	var i, n;

	n = 1000;
	i = n;

	while ( i-- ) {
		one( t , Math.random(), Math.random(), Math.random() );
	}

});
