
var gobble = function ( callable, n ) {

	return function () {

		var args;

		args = Array.prototype.slice( arguments, n );

		return Function.prototype.apply( callable, this, args );

	};

};

exports.gobble = gobble;
