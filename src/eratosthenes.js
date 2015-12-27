import {build} from './sieve';
import {multiples, range} from './generators';

export function eratosthenes(n, toggle) {
  var sieve = build(range(2, n), toggle);

  for (let prime of sieve) {
    if (prime*prime > n) break;

    for (let multiple of multiples(prime, n)) {
      if (multiple > prime) { // don't discount 1*prime
        sieve.composite(multiple);
      }
    }
  }
  return sieve;
};
