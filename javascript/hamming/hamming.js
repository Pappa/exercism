//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
    if (strand1.length !== strand2.length) {
        return 0;
    }
};

module.exports = Hamming;
