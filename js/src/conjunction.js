

var conjunction = function ( ) {

	var i , len , args ;

	args = arguments ;

	len = args.length ;

	return function ( obj ) {

		for ( i = 0 ; i < len ; ++i ) {
			if ( ! args[i]( obj ) ) return false ;
		}

		return true ;

	} ;

} ;

exports.conjunction = conjunction ;
