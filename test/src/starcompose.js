import test from 'ava';
import * as functools from '../../src';

import util from "util" ;

var f = function ( x , y ) {
	return [ x * x * y , x * y * y ] ;
} ;


var g = function ( x , y ) {
	return [ x + 1 , 2 * y - x ] ;
} ;

var fg = functools.starcompose( [ f , g ] ) ;

var one = function ( x , y ) {

	t.deepEqual(
		fg( [ x , y ] ) , functools.star( f , functools.star( g , [ x , y ] ) ) ,
		util.format(
			"fg( %s , %s ) === f( g( %s , %s ) )" ,
			x , y  , x , y
		)
	) ;
} ;

test( "starcompose" , t => {

	one( 0 , 178 ) ;
	one( 1 , 237 ) ;
	one( 2 , -89 ) ;

} ) ;
