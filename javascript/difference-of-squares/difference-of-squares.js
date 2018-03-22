const range = (length, start = 0) => [...Array(length + start).keys()].slice(start);
const square = n => n * n;
const sum = (a, b) => a + b;

class Squares {

    constructor(n) {
        let numbers = range(n, 1);
        this.squareOfSums = square(numbers.reduce(sum));
        this.sumOfSquares = numbers.map(square).reduce(sum);
        this.difference = this.squareOfSums - this.sumOfSquares;
    }

}

module.exports = Squares;