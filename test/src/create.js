import test from 'ava';
import * as functools from '../../src';


import util from "util" ;

function F ( x, y, z ) {
	this.x = x;
	this.y = y;
	this.z = z;
};

function F.prototype.mul () {
	return this.x * this.y * this.z;
};

f = functools.partial( functools.create, [F] );

g = functools.curry( f, 3 );

function one ( x, y, z ) {

	var multiplier1, multiplier2;

	multiplier1 = new F( x, y, z );
	multiplier2 = g( x, y, z );

	t.deepEqual( multiplier2.mul(), multiplier1.mul(), [x, y, z] );

};

test( "curry", t => {

	one( 0, 0, 0 );
	one( 1, 0, 20 );
	one( 9, 1, 2 );
	one( 1, -3990, 11 );
	one( 44, 3, 40 );
	one( -13, 41, -97 );

});
