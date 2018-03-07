class Triangle {

    constructor(...sides) {
        this.sides = sides;
    }

    kind() {
        if (!this.isValid()) {
            throw new Error();
        }
        const size = new Set(this.sides).size;
        return ['equilateral', 'isosceles', 'scalene'][size - 1];
    }

    isValid() {
        const [a, b, c] = this.sides.sort((a, b) => a - b);
        return (
            this.sides.every(s => s > 0)
            && a + b >= c
        );
    }
}

module.exports = Triangle;