import test from 'ava';
import * as functools from '../../src';

import util from "util" ;

var f = function ( x, y, z ) {
	return 2 * x + y - z;
};


var one = function (t, trash, x, y, z) {
	var msg, len, args;
	len = trash.length;
	args = trash.concat([x, y, z]);
	var g = functools.gobble( f, len );

	msg = util.format( "g.apply( null, %s ) === f( %s, %s, %s )", JSON.stringify(args), x, y, z );
	t.deepEqual( g.apply( null, args ), f( x, y, z ), msg );
};

test( "gobble", t => {

	one( t, [], 0, 0, 0 );
	one( t, [], 1, 0, 0 );
	one( t, [], 0, 1, 0 );
	one( t, [], 0, 0, 1 );
	one( t, [], 0, 3, 40 );
	one( t, [], 13, 41, 97 );


	one( t, [-1], 0, 0, 0 );
	one( t, [-1], 1, 0, 0 );
	one( t, [-1], 0, 1, 0 );
	one( t, [-1], 0, 0, 1 );
	one( t, [-1], 0, 3, 40 );
	one( t, [-1], 13, 41, 97 );


	one( t, [-1, -2], 0, 0, 0 );
	one( t, [-1, -2], 1, 0, 0 );
	one( t, [-1, -2], 0, 1, 0 );
	one( t, [-1, -2], 0, 0, 1 );
	one( t, [-1, -2], 0, 3, 40 );
	one( t, [-1, -2], 13, 41, 97 );


});
