
var util = require( "util" ) ;

var f = function ( x , y ) {
	return [ x * x * y , x * y * y ] ;
} ;


var g = function ( x , y ) {
	return [ x + 1 , 2 * y - x ] ;
} ;

var fg = functools.starchain( [ g , f ] ) ;

var one = function ( x , y ) {

	deepEqual(
		fg( [ x , y ] ) , functools.star( f , functools.star( g , [ x , y ] ) ) ,
		util.format(
			"fg( %s , %s ) === f( g( %s , %s ) )" ,
			x , y  , x , y
		)
	) ;
} ;

test( "starchain" , function ( ) {

	one( 0 , 178 ) ;
	one( 1 , 237 ) ;
	one( 2 , -89 ) ;

} ) ;
