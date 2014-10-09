

var rpartial = function ( fn, that, args ) {

	var stack;

	stack = args.slice( 0 );

	return function () {

		var args, fn;

		args = Array.prototype.slice.call( arguments, 0 );

		args = [that].concat( args ).concat( stack );

		fn = Function.prototype.bind.apply( fn, args );

		return fn();
	};


};

exports.rpartial = rpartial;
