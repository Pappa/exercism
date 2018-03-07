class Triangle {

    constructor(...sides) {
        this.sides = sides;
    }

    kind() {
        if (!this.isValid()) {
            throw new Error();
        }
        const size = new Set(this.sides).size;
        switch (size) {
            case 1:
            return 'equilateral';
            case 2:
            return 'isosceles';
            case 3:
            return 'scalene';
        }
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