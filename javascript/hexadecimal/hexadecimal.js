const digits = [...'0123456789abcdef'];

const isValid = (str) => [...str].every(c => digits.includes(c));

sum = (x, y) => x + y;

class Hexadecimal {

    constructor(hex) {
        this.hex = hex;
    }

    toDecimal() {
        return (isValid(this.hex)) ?
            [...this.hex]
                .reverse()
                .map((c, exp) => {
                    const idx = digits.indexOf(c);
                    return Number(idx) * Math.pow(16, exp);
                })
                .reduce(sum)
            : 0;
    }
}

module.exports = Hexadecimal;