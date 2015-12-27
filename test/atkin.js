import {expect} from "chai";
import {atkin} from "../src/index";
import {primes} from "./test-primes";

describe('Sieve of Atkin', () => {
  it("should correctly identify primes up to 10", () =>
    expect([...atkin(10)]).to.have.members(primes(10))
  );

  it("should correctly identify primes up to 100", () =>
    expect([...atkin(100)]).to.have.members(primes(100))
  );

  it("should correctly identify primes up to 1000", () =>
    expect([...atkin(1000)]).to.have.members(primes(1000))
  );

  it("should call supplied callback with correct values in the correct order", () => {
    let called = [];
    let expected = [
      13, 7, 11 //remainders
    ];
    atkin(15, v => called.push(v));

    expect(called).to.deep.equal(expected);
  });
});
