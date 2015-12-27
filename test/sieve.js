import {expect} from "chai";
import {build} from "../src/sieve";
import {range as r} from "../src/generators";

describe("Sieve object behaviour", () => {
    it("should return a full results set initially", () => {
      let s = build(r(1, 10));
      expect([...s].length).to.equal(10);
    });

    it("should return a reduced results set after composites labelled", () => {
      let s = build(r(1, 100)).composite(3).composite(99);
      expect([...s].length).to.equal(98);
    });

    it("should return the correct reduced results set after composites labelled", () => {
      let buildd = build(r(1, 10)).composite(5).composite(3);
      expect([...buildd]).to.have.members([1,2,4,6,7,8,9,10]);
    });

    it("should return correct results after composites and primes labelled", () => {
      let buildd = build(r(1, 10)).composite(5).composite(3).prime(3);
      expect([...buildd]).to.have.members([1,2,3,4,6,7,8,9,10]);
    });

    it("should return correct results after values toggled", () => {
      let buildd = build(r(1, 10)).toggle(5).toggle(3).toggle(3);
      expect([...buildd]).to.have.members([1,2,3,4,6,7,8,9,10]);
    });

    it("should return correct results after values toggled", () => {
      let buildd = build(r(1, 10)).toggle(5).toggle(3).toggle(3);
      expect([...buildd]).to.have.members([1,2,3,4,6,7,8,9,10]);
    });

    it("should return first value as prime", () => {
      let first = [...build(r(1, 10))].shift();
      expect(first).to.equal(1);
    });

    it("should return first non-discounted value as prime", () => {
      let v = [...build(r(1, 10)).toggle(1)].shift();
      expect(v).to.equal(2);
    });

    it("should order return values in ascending order", () => {
      let s = build(r(1, 10));
      s.composite(1).composite(2).composite(3).composite(5).composite(6).prime(3);
      let v = [...s].shift();
      expect(v).to.equal(3);
    });

    it("should call callback with false when marking as composite", () => {
      let called = {};
      build(r(1, 10), (v,toggle) => called[v] = toggle).composite(3);

      expect(called).to.deep.equal({3: false});
    });

    it("should call callback with true when marking as prime", () => {
      let called = {};
      build(r(1, 10), (v,toggle) => called[v] = toggle).prime(3);

      expect(called).to.deep.equal({3: true});
    });

    it("should call callback with no second argument when toggling", () => {
      let called = {};
      build(r(1, 10), (v,toggle) => called[v] = toggle).toggle(3);

      expect(called).to.deep.equal({3: undefined});
    });
});
