

var apply = function ( fn, that, args ) {

	return Function.prototype.apply.call( fn, that, args );

};

exports.apply = apply;
