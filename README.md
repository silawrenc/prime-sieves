# Prime sieve implementations in javascript

<img src="http://i.giphy.com/3o7WTDgbZPFXGuMQQU.gif" alt="Sieve of Eratosthenes" width="400" align="right" style="margin-top:-20px;overflow:hidden;">

A handful of common prime sieve implementations in javascript. Each sieve accepts two arguments. The first is simply the size of the sieve, the second is a toggle function which is called each time a value is "sieved" (or unsieved). This makes it easy to build animations decoupled from the sieving algorithm.

The toggle function has a signature of `toggle(value, flag)` where the flag corresponds to the state of the value in the sieve. I.e. if the flag is `false`, the value has been 'sieved' and is no longer active in the sieve, if it is `true` then the value has been re-included in the sieve ([see e.g. Sieve of Atkin](https://en.wikipedia.org/wiki/Sieve_of_Atkin) for when that might happen).

## Usage
The easiest way to install is via [NPM](https://www.npmjs.com/package/prime-sieves).
```javascript
var sieves = require('prime-sieves');
// some kind of visual behaviour function
function sieve(value, flag) {
  $('#animation > span')[value].toggleClass('active', flag)
};
// kick things off
sieves.eratosthenes(100, sieve);
```
