class Year {

    constructor(input) {
        this.input = input;
    }

    isLeap() {
        return (this.input % 4 === 0 && !(this.input % 100 === 0) || (this.input % 400 === 0));
    }

}

module.exports = Year;
