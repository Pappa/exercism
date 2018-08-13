class CollatzConjecture {

    steps(n, st = 0) {
        if (n < 1) {
            throw new Error('Only positive numbers are allowed');
        }
        if (n === 1) {
            return st;
        }
        if (n % 2 === 0) {
            return this.steps(n / 2, st + 1);
        } else {
            return this.steps(n * 3 + 1, st + 1);
        }
    }
}

module.exports = CollatzConjecture;