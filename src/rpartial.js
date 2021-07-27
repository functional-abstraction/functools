import rbind from './rbind.js';

export default function rpartial(callable, args) {
	return rbind(callable, undefined, args);
}
