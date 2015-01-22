

var partial = function ( callable , args ) {

	return bind( callable , undefined , args );

} ;

exports.partial = partial ;
