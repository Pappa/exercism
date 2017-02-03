//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(input) {
    return (input % 4 === 0 && !(input % 100 === 0) || (input % 400 === 0));
};

module.exports = Year;
