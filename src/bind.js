export default function bind(callable, that, args) {
	const bound_args = [that].concat(args);

	return Function.prototype.bind.apply(callable, bound_args);
}
