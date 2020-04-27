

var starcompose = function ( callables ) {

	var i , len , args ;

	args = [] ;

	len = callables.length ;

	for ( i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return compose( args ) ;

} ;

exports.starcompose = starcompose ;
