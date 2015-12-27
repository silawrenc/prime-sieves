import {expect} from "chai";
import {sundaram} from "../src/index";
import {primes} from "./test-primes";

describe('Sieve of Sundaram', function () {
  it("should correctly identify primes up to 11", function() {
    expect([...sundaram(5)]).to.have.members(primes(11));
  });

  it("should correctly identify primes up to 101", function() {
    expect([...sundaram(50)]).to.have.members(primes(101));
  });

  it("should correctly identify primes up to 1001", function() {
    expect([...sundaram(500)]).to.have.members(primes(1001));
  });

  it("should call supplied callback with correct values in the correct order", function() {
    var called = [];
    var expected = [
       4, 7, 12, 10, 13 // mark all except 2, 3, 5 as composite
    ];

    function callback(v, flag) {
      called.push(v);
    }
    sundaram(15, callback);

    expect(called).to.deep.equal(expected);
  });
});
