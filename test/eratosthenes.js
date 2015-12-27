import {expect} from "chai";
import {eratosthenes} from "../src/index";
import {primes} from "./test-primes";

describe('Sieve of Eratosthenes', () => {
  it("should correctly identify primes up to 10", () =>
    expect(eratosthenes(10)).to.have.members(primes(10))
  );

  it("should correctly identify primes up to 100", () =>
    expect(eratosthenes(100)).to.have.members(primes(100))
  );

  it("should correctly identify primes up to 1000", () =>
    expect(eratosthenes(1000)).to.have.members(primes(1000))
  );

  it("should call supplied callback with correct values in the correct order", () => {
    let called = [];
    let expected = [
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, // multiples of 2
      6, 9, 12, 15, 18, 21, 24, // multiples of 3
      10, 15, 20, 25 // multiples of 5
      // no 7 or above as p^2>25 for p>5
    ];
    eratosthenes(25, v => called.push(v));

    expect(called).to.deep.equal(expected);
  });
});
