const range = (max, min) => Array.from(new Array(max - min + 1), (_, idx) => idx + min);

class Triplet {

    constructor(...numbers) {
        this.numbers = numbers;
    }

    sum() {
        return this.numbers.reduce((total, x) => total + x);
    }

    product() {
        return this.numbers.reduce((total, x) => total * x);
    }

    isPythagorean() {
        const [x, y, z] = this.numbers;
        return (
            x*x + y*y == z*z ||
            y*y + z*z == x*x ||
            x*x + z*z == y*y
        )
    }

    static where(options) {
        const max = options.maxFactor;
        const min = options.minFactor || 1;
        const sum = options.sum;
        const over = range(max, min);
        return [];
    }

}

module.exports = Triplet;