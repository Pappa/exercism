VALID = '01';

class Binary {

    constructor(input) {
        this.input = input;
    }

    toDecimal() {
        if (!this.isValid()) {
            return 0;
        }
        return this.parse();
    }

    isValid() {
        return this.input
            .split('')
            .every(c => VALID.includes(c));
    }

    parse() {
        return this.input
            .split('')
            .reverse()
            .reduce((acc, val, index) => {
                return (val === '1') ? acc + Math.pow(2, index) : acc;
            }, 0);
    }
}

module.exports = Binary;