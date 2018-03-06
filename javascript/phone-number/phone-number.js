class PhoneNumber {
    constructor(str) {
        this.digits = str
            .split('')
            .filter(c => !isNaN(Number.parseInt(c, 10)))
            .join('')
            .replace(/^1/, '');
    }

    number() {
        return this.isValid() ? this.digits : null;
    }

    isValid() {
        return (
            this.digits.length === 10
            && this.digits[3] !== '0'
        );
    }
}

module.exports = PhoneNumber;