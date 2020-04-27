

var bind = function ( callable, that, args ) {

	args = [that].concat( args );

	return Function.prototype.bind.apply( callable, args );
};

exports.bind = bind;
