
var star = function ( fn, args ) {

	return Function.prototype.apply.call( fn, this, args );

};

exports.star = star;
