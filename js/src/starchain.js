

var starchain = function ( ) {

	var i , len , args ;

	args = [] ;

	len = arguments.length ;

	for ( i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ arguments[i] ] ) ) ;
	}

	return star( chain , args ) ;

} ;

exports.starchain = starchain ;
