import {build} from './sieve';
import {multiples} from './generators';

/**
 * find values such that v%60 is a member of `remainders`,
 * and 4i^2 + j^2 has an odd number of solutions
 */
function first(n) {
  let i = 0;
  let j = 0;
  let remainders = new Set([1, 13, 17, 29, 37, 41, 49, 53]);
  let results = new Set();

  while (++j*j <= n - 4) {
    while (++i <= (n-1)/4) {
      let s = 4*i*i + j*j;
      if (s <= n && remainders.has(s%60)) {
        results.has(s) ? results.delete(s) : results.add(s);
      }
    }
    i = 0;
  }
  return results;
}

/**
 * find values such that v%60 is a member of `remainders`,
 * and 3i^2 + j^2 has an odd number of solutions
 */
function second(n) {
  let i = 0;
  let j = 0;
  let remainders = new Set([7, 19, 31, 43]);;
  let results = new Set();

  while (++j*j <= n - 3) {
    while (++i*i <= (n-1)/3) {
      let s = 3*i*i + j*j;
      if (s <= n && remainders.has(s%60)) {
        results.has(s) ? results.delete(s) : results.add(s);
      }
    }
    i = 0;
  }

  return results;
}


/**
 * find values such that v%60 is a member of `remainders`,
 * and 3i^2 - j^2 has an odd number of solutions
 */
function third(n) {
  let i = 0;
  let j = 0;
  let remainders = new Set([11, 23, 47, 59]);
  let results = new Set();

  while (++i*i <= n/2) {
    while (++j < i) {
      let s = 3*i*i - j*j;
      if (s <= n && remainders.has(s%60)) {
        results.has(s) ? results.delete(s) : results.add(s);
      }
    }
    j = 0;
  }

  return results;
}

export function atkin(n, toggle) {

  /**
   * start with everything assumed composite except 2, 3, and 5
   */
  let sieve = build([2, 3, 5], toggle);

  /**
   * investigate each of the three sets of remainders in turn...
   */
  for (let k of first(n)) {
    sieve.toggle(k);
  }

  for (let k of second(n)) {
    sieve.toggle(k);
  }

  for (let k of third(n)) {
    sieve.toggle(k);
  }

  /**
   * finally, set all multiples of squares of primes as composite
   * skip 2, 3, 5 as none are a factor of any remainders, and 60 = 2*2*3*5
   */
  for (let prime of sieve) {
    if (prime > 5) {
      for (let multiple of multiples(prime*prime, n)) {
        sieve.composite(multiple);
      }
    }
  }

  return sieve;
};
