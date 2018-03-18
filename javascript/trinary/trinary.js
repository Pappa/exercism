const isValid = (str) => [...str].every(c => '012'.includes(c));

class Trinary {

    constructor(trinary) {
        this.trinary = trinary;
    }

    toDecimal() {
        return (isValid(this.trinary)) ?
            [...Array(this.trinary.length).keys()]
                .reverse()
                .map((exp, idx) => Number(this.trinary[idx]) * Math.pow(3, exp))
                .reduce((acc, n) => acc + n)
            : 0;
    }
}

module.exports = Trinary;