import "babel-polyfill";

/**
 * generate an iterable, inclusive range
 */
export function* range(min, max) {
  for (let i = min; i <= max; i++) {
    yield i;
  }
}

/**
 * find all multiples of k up to limit
 */
export function* multiples(k, limit) {
  for (var i = 1; i*k <= limit; i++) {
    yield i*k;
  }
}
