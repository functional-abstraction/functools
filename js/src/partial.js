

var partial = function ( fn, that, args ) {

	args = [that].concat(args);

	return Function.prototype.bind.apply( fn, args );
};

exports.partial = partial;
