class PhoneNumber {
    constructor(str) {
        this.num = str
            .replace(/(\(|\)| |-)/g, '');
    }

    number() {
        return this.num;
    }
}

module.exports = PhoneNumber;