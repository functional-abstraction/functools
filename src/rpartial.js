

var rpartial = function ( callable, args ) {

	return rbind( callable, undefined, args );

};

exports.rpartial = rpartial;
