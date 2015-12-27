/**
 * generate an inclusive range
 */
export function range(min, max) {
  let values = new Set();
  for (let i = min; i <= max; i++) {
    values.add(i);
  }
  return values;
}

/**
 * find all multiples of k up to limit
 */
export function multiples(k, limit) {
  let values = new Set();
  for (var i = 1; i*k <= limit; i++) {
    values.add(i*k);
  }
  return values;
}
