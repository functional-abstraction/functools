
var create = function ( fn ) {

	return new ( Function.prototype.bind.apply( fn , arguments ) )( ) ;

} ;

exports.create = create ;
