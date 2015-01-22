

var disjunction = function ( ) {

	var i , len , args ;

	args = arguments ;

	len = args.length ;

	return function ( obj ) {

		for ( i = 0 ; i < len ; ++i ) {
			if ( args[i]( obj ) ) return true ;
		}

		return false ;

	} ;

} ;

exports.disjunction = disjunction ;
