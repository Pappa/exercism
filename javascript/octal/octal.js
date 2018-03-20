const isValid = (str) => [...str].every(c => '01234567'.includes(c));

class Octal {

    constructor(octal) {
        this.octal = octal;
    }

    toDecimal() {
        return (isValid(this.octal)) ?
            [...this.octal]
                .reverse()
                .map((n, exp) => Number(n) * Math.pow(8, exp))
                .reduce((acc, n) => acc + n)
            : 0;
    }
}

module.exports = Octal;