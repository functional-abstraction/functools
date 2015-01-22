

var chain = function ( ) {

	var i , len , args ;

	args = arguments ;

	len = args.length ;

	return function ( obj ) {

		i = len ;

		while ( i-- ) {
			obj = args[i]( obj ) ;
		}

		return obj ;

	} ;

} ;

exports.chain = chain ;
