import bind from './bind.js';

export default function curry(callable, arity) {
	return function () {
		const args = Array.prototype.slice.call(arguments, 0);

		const fn = bind(callable, this, args);

		const i = arity - args.length;

		if (i <= 0) {
			return fn();
		}

		return curry(fn, i);
	};
}
