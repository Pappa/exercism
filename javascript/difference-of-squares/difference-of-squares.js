const range = n => [...Array(n + 1).keys()].slice(1);
const square = n => n * n;
const sum = (a, b) => a + b;

class Squares {

    constructor(n) {
        let numbers = range(n);
        this.squareOfSums = square(numbers.reduce(sum));
        this.sumOfSquares = numbers.map(square).reduce(sum);
        this.difference = this.squareOfSums - this.sumOfSquares;
    }

}

module.exports = Squares;