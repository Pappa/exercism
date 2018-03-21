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
        return [];
    }

}

module.exports = Triplet;