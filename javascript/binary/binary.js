VALID = '01';

class Binary {

    constructor(input) {
        this.input = input;
    }

    toDecimal() {
        return this.isValid() ? this.parse() : 0;
    }

    isValid() {
        return [...this.input]
            .every(c => VALID.includes(c));
    }

    parse() {
        return [...this.input]
            .reverse()
            .reduce((acc, val, index) => {
                return (val === '1') ? acc + Math.pow(2, index) : acc;
            }, 0);
    }
}

module.exports = Binary;