import test from 'ava';
import * as functools from '../../src/index.js';


import util from "util" ;

function F ( x, y, z ) {
	this.x = x;
	this.y = y;
	this.z = z;
};

F.prototype.mul = function () {
	return this.x * this.y * this.z;
};

const f = functools.partial( functools.create, [F] );

const g = functools.curry( f, 3 );

function one ( t, x, y, z ) {

	var multiplier1, multiplier2;

	multiplier1 = new F( x, y, z );
	multiplier2 = g( x, y, z );

	t.deepEqual( multiplier2.mul(), multiplier1.mul(), JSON.stringify([x, y, z]) );

};

test( "curry", t => {

	one( t, 0, 0, 0 );
	one( t, 1, 0, 20 );
	one( t, 9, 1, 2 );
	one( t, 1, -3990, 11 );
	one( t, 44, 3, 40 );
	one( t, -13, 41, -97 );

});
