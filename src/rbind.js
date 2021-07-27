export default function rbind(callable, that, args) {
	const stack = args.slice(0);

	return function () {
		const new_args = Array.prototype.slice.call(arguments, 0);

		const args = [that].concat(new_args).concat(stack);

		const fn = Function.prototype.bind.apply(callable, args);

		return fn();
	};
}
