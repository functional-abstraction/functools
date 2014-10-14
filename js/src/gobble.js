
var gobble = function ( callable, n ) {

	return function () {

		var args;

		args = Array.prototype.slice.call( arguments, n );

		return Function.prototype.apply.call( callable, this, args );

	};

};

exports.gobble = gobble;
