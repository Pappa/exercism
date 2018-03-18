const isValid = (str) => [...str].every(c => '012'.includes(c));

class Trinary {

    constructor(trinary) {
        this.trinary = trinary;
    }

    toDecimal() {
        return (isValid(this.trinary)) ?
            [...this.trinary]
                .reverse()
                .map((n, exp) => Number(n) * Math.pow(3, exp))
                .reduce((acc, n) => acc + n)
            : 0;
    }
}

module.exports = Trinary;