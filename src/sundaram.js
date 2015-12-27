import {build} from './sieve';
import {range} from './iterators';

/**
 * find values k up to n, such that k = i + j + 2ij
 */
function candidates(n) {
  let i = 0;
  let j = 0;
  let results = new Set();
  while (++j*3 <= n-1) {
    while (++i <= j && i+j+2*i*j <= n) {
      results.add(i+j+2*i*j);
    }
    i = 0;
  }
  return results;
}

export function sundaram(n, toggle) {
  var sieve = build(range(1, n), toggle);
  var primes = new Set([2]); //sundaram only finds odd primes

  for (let k of candidates(n)) {
    sieve.composite(k);
  }

  // for all k unsieved, 2k+1 is prime
  for (let entry of sieve) {
    primes.add(2*entry+1);
  }

  return [...primes];
};
