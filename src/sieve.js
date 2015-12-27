export function build(iterable, toggle) {
  let set = new Set(iterable);
  let sieve = {
    prime: v => {
      set.add(v);
      toggle && toggle(v, true);
      return sieve;
    },
    composite: v => {
      set.delete(v);
      toggle && toggle(v, false);
      return sieve;
    },
    toggle: v => {
      set.has(v) ? set.delete(v) : set.add(v);
      toggle && toggle(v);
      return sieve;
    }
  };

  // iterate through set values in ascending order
  sieve[Symbol.iterator] = () => {
    var index = 0;
    return {
      next: () => {
        if (index >= set.size) {
          return {done: true};
        }
        let sorted = [...set.values()].sort((a, b) => a - b);
        return {value: sorted[index++], done: false};
      }
    };
  };

  return sieve;
}
