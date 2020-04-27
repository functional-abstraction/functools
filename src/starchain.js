

export default function starchain ( callables ) {

	var i , len , args ;

	args = [] ;

	len = callables.length ;

	for ( i = 0 ; i < len ; ++i ) {
		args.push( partial( star , [ callables[i] ] ) ) ;
	}

	return chain( args ) ;

}

