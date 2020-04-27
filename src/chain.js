

export default function chain ( callables ) {

	var len = callables.length ;

	return function ( obj ) {

		for ( var i = 0 ; i < len ; ++i ) obj = callables[i]( obj ) ;

		return obj ;

	} ;

}

