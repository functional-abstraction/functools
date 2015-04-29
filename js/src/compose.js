

var compose = function ( callables ) {

	var len = callables.length ;

	return function ( obj ) {

		var i = len ;

		while ( i-- ) obj = callables[i]( obj ) ;

		return obj ;

	} ;

} ;

exports.compose = compose ;
