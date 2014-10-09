

var chain = function () {

	var i, len, fn;

	len = arguments.length

	return function ( obj ) {

		i = len;

		while ( i-- ) {
			obj = arguments[i]( obj );
		}

		return obj;
	};

};

exports.chain = chain;
