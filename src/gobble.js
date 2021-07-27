export default function gobble(callable, n) {
	return function () {
		const args = Array.prototype.slice.call(arguments, n);

		return Function.prototype.apply.call(callable, this, args);
	};
}
